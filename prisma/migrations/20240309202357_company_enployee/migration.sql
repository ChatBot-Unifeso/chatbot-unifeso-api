-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('adm', 'user');

-- CreateTable
CREATE TABLE "Company" (
    "id_company" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id_company")
);

-- CreateTable
CREATE TABLE "Enployee" (
    "id_enployee" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "roles" "Roles" NOT NULL,

    CONSTRAINT "Enployee_pkey" PRIMARY KEY ("id_enployee")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_slug_key" ON "Company"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Enployee_email_key" ON "Enployee"("email");

-- AddForeignKey
ALTER TABLE "Enployee" ADD CONSTRAINT "Enployee_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;
