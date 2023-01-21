/*
  Warnings:

  - Made the column `userId` on table `FundRaiser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "FundRaiser" DROP CONSTRAINT "FundRaiser_userId_fkey";

-- AlterTable
ALTER TABLE "FundRaiser" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "FundRaiser" ADD CONSTRAINT "FundRaiser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
