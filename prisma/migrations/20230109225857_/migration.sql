-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "fundRaiserId" TEXT;

-- CreateTable
CREATE TABLE "FundRaiser" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "benificiary" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fundraiserName" TEXT NOT NULL,
    "fundraiserDescription" TEXT NOT NULL,
    "goalAmount" INTEGER NOT NULL,
    "userId" TEXT,
    "status" "STATUS" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "FundRaiser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_fundRaiserId_fkey" FOREIGN KEY ("fundRaiserId") REFERENCES "FundRaiser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FundRaiser" ADD CONSTRAINT "FundRaiser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
