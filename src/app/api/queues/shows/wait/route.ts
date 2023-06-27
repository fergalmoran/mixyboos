import { createPusherServer } from "@/lib/services/realtime";
import { mapShowToShowModel } from "@/lib/utils/mappers/showMappers";
import { mapDbAuthUserToUserModel } from "@/lib/utils/mappers/userMapper";
import { prisma } from "@/server/db";
import { LiveShowStatus } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { Queue } from "quirrel/next-app";
import superagent from "superagent";

export const waitForShowQueue = Queue(
  "api/queues/shows/wait", // 👈 the route it's reachable on
  async (showId: string) => {
    const rt = createPusherServer();
    const url = `https://live-mixyboos.dev.fergl.ie:9091/hls/${showId}/index.m3u8`;
    console.log("wait", "Checking URL", url);
    const show = await prisma.liveShow.findUnique({
      where: {
        id: showId,
      },
    });

    if (!show) {
      throw new Error(`Unable to find show ${showId}`);
    }

    const user = mapDbAuthUserToUserModel(
      await prisma.user.findUnique({
        where: {
          id: show.userId,
        },
      })
    );

    if (!user) {
      throw new Error(`Unable to find user ${show.userId}`);
    }

    const res = await superagent
      .get(url)
      .retry(10, (err, res) => {
        console.log("wait", "result", res.notFound, res.statusCode, res.status);
        const shouldRetry = res.notFound;
        if (shouldRetry) {
          console.log("wait", "Waiting to retry");
          Atomics.wait(
            new Int32Array(new SharedArrayBuffer(4)),
            0,
            0,
            2 * 1000
          );
          return true;
        }
        return res.notFound;
      })
      .catch((err) => {
        console.log("WaitForShow", "Error fetching retrying", err);
      });

    console.log("wait", "Finished waiting for show", res?.statusCode);
    if (res?.statusCode === StatusCodes.OK) {
      //showtime

      //update mix entry in db
      await prisma.liveShow.update({
        where: {
          id: show.id,
        },
        data: { ...show, status: LiveShowStatus.STREAMING },
      });

      //push status to client
      await rt.trigger(`ls_${showId}`, "show-started", {
        show: mapShowToShowModel(show, user),
      });
      console.log("waitForShow", "show-started", showId);
      return;
    }

    //notime
    await rt.trigger(`ls_${showId}`, "show-failure", {
      id: showId,
    });
    console.error("waitForShow", "FAILED: show-failure", showId);
  }
);
export const POST = waitForShowQueue;
