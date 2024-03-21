/*
  Warnings:

  - You are about to drop the column `name` on the `Bot` table. All the data in the column will be lost.
  - Added the required column `id_menu` to the `Bot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bot" DROP COLUMN "name",
ADD COLUMN     "id_menu" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Bot" ADD CONSTRAINT "Bot_id_menu_fkey" FOREIGN KEY ("id_menu") REFERENCES "Menu"("id_menu") ON DELETE RESTRICT ON UPDATE CASCADE;
