-- CreateEnum
CREATE TYPE "Action" AS ENUM ('navigation', 'message', 'redirect');

-- CreateTable
CREATE TABLE "Bot" (
    "id_bot" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Bot_pkey" PRIMARY KEY ("id_bot")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id_menu" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id_menu")
);

-- CreateTable
CREATE TABLE "Option" (
    "id_option" TEXT NOT NULL,
    "id_menu" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "action" "Action" NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id_option")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bot_phone_key" ON "Bot"("phone");

-- AddForeignKey
ALTER TABLE "Bot" ADD CONSTRAINT "Bot_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_id_menu_fkey" FOREIGN KEY ("id_menu") REFERENCES "Menu"("id_menu") ON DELETE RESTRICT ON UPDATE CASCADE;
