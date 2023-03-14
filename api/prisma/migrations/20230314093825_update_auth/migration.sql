/*
  Warnings:

  - Added the required column `userId` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "userId" INTEGER NOT NULL;
