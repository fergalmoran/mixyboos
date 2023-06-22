import { type UserModel } from "@/lib/models";
import { type User as DbUser } from "@prisma/client";
import { type User as AuthUser } from "next-auth";

const mapAuthUserToUserModel = (
  user: AuthUser | undefined | null
): UserModel | undefined =>
  user
    ? {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage,
        headerImage: user.headerImage,
        urls: [],
      }
    : undefined;

const mapDbAuthUserToUserModel = (
  user: DbUser | undefined | null
): UserModel | undefined =>
  user
    ? {
        id: user.id,
        username: user.username ?? "unknownuser",
        name: user.name ?? user.username ?? "Unknown User",
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage
          ? `https://mixyboos.twic.pics/${user.profileImage}?twic=v1/resize=256`
          : "/img/default-avatar.png",
        headerImage: user.headerImage,
        urls: [],
      }
    : undefined;

export { mapAuthUserToUserModel, mapDbAuthUserToUserModel };
