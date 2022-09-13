/*
  Warnings:

  - You are about to drop the column `workerNumber` on the `teachers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "teachers_workerNumber_key";

-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "workerNumber";
