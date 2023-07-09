import { writeFile } from "fs/promises";
import { getFileExtension } from "@/lib/utils/fileUtils";
import { NextResponse, type NextRequest } from "next/server";
import { processMixQueue } from "../queues/upload/mix/route";
import * as Sentry from "@sentry/nextjs";
import path from "path";
import os from "os";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;
  const id: string | null = data.get("mixId") as unknown as string;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const outputFile = path.join(
    os.tmpdir(),
    `${id}.${getFileExtension(file.name)}`
  );
  await writeFile(outputFile, buffer);
  console.log(`open ${outputFile} to see the uploaded file`);
  try {
    await processMixQueue.enqueue(
      { filePath: outputFile, mixId: id },
      { delay: 1 }
    );
  } catch (err) {
    Sentry.captureException(err);
  }
  return NextResponse.json({ success: true });
}
