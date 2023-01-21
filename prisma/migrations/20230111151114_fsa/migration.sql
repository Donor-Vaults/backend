/*
  Warnings:

  - You are about to drop the `FundRaiserDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FundRaiserDocument" DROP CONSTRAINT "FundRaiserDocument_fundRaiserId_fkey";

-- AlterTable
ALTER TABLE "FundRaiser" ADD COLUMN     "supportingDocuments" TEXT[];

-- DropTable
DROP TABLE "FundRaiserDocument";
