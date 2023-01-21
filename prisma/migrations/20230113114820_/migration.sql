/*
  Warnings:

  - You are about to drop the column `status` on the `FundRaiser` table. All the data in the column will be lost.
  - You are about to drop the column `kyc` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FundRaiser" DROP COLUMN "status",
ADD COLUMN     "fundraisers_status" "STATUS" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "kyc",
DROP COLUMN "role",
ADD COLUMN     "contract_address" TEXT,
ADD COLUMN     "kyc_status" "KYC" NOT NULL DEFAULT 'NOT_INITIALIZED',
ADD COLUMN     "user_role" "Role" NOT NULL DEFAULT 'USER';
