/*
  Warnings:

  - You are about to drop the column `userAuthId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userAuthId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userAuthId";

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
