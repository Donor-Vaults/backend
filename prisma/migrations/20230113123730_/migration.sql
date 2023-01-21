/*
  Warnings:

  - You are about to drop the column `contract_address` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FundRaiser" ADD COLUMN     "contract_address" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contract_address";
