/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_fundRaiserId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_userId_fkey";

-- DropTable
DROP TABLE "Document";

-- CreateTable
CREATE TABLE "FundRaiserDocument" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'PENDING',
    "fundRaiserId" TEXT,

    CONSTRAINT "FundRaiserDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FundRaiserDocument" ADD CONSTRAINT "FundRaiserDocument_fundRaiserId_fkey" FOREIGN KEY ("fundRaiserId") REFERENCES "FundRaiser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
