/*
  Warnings:

  - You are about to drop the `Enployee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Enployee" DROP CONSTRAINT "Enployee_id_company_fkey";

-- DropTable
DROP TABLE "Enployee";

-- CreateTable
CREATE TABLE "Employee" (
    "id_employee" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "roles" "Roles" NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id_employee")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;
