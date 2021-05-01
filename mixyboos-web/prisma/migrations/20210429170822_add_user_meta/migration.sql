/*
  Warnings:

  - A unique constraint covering the columns `[streamKey]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "streamKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user.streamKey_unique" ON "user"("streamKey");
