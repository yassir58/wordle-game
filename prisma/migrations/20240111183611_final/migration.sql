/*
  Warnings:

  - Added the required column `senderName` to the `GameIvite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameIvite" ADD COLUMN     "senderName" TEXT NOT NULL;
