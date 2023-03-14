/*
  Warnings:

  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileId",
ADD COLUMN     "bio" TEXT;

-- DropTable
DROP TABLE "Profile";
