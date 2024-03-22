import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { prisma } from 'src/prisma';

@Injectable()
export class BotService {
  async create(createBotDto: CreateBotDto) {
    const { data_bot, id_company } = createBotDto;

    return await prisma.bot.create({
      data: {
        company: {
          connect: {
            id_company
          }
        },
        phone: data_bot.phone
      }
    });
  }

 async  addMenuInitial(id_menu: string, data: any) {
    
  }

  async findAll() {
    return await prisma.bot.findMany();
    
  }

  async findOne(id_bot: string) {
    return await prisma.bot.findUnique({
      where: {
        id_bot
      }
    });
  }

  async update(id_bot: string, updateBotDto: UpdateBotDto) {
    return await prisma.bot.update({
      where: {
        id_bot
      },
      data: updateBotDto
    });
  }

  async remove(id_bot: string) {
    return await prisma.bot.delete({
      where: {
        id_bot
      }
    });
  }

}
