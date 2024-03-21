-- DropForeignKey
ALTER TABLE "Bot" DROP CONSTRAINT "Bot_id_menu_fkey";

-- AlterTable
ALTER TABLE "Bot" ALTER COLUMN "id_menu" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Bot" ADD CONSTRAINT "Bot_id_menu_fkey" FOREIGN KEY ("id_menu") REFERENCES "Menu"("id_menu") ON DELETE SET NULL ON UPDATE CASCADE;
