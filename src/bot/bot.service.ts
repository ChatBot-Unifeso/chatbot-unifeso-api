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

  addMenuInitial(id_menu: string, data: any) {
    throw new Error('Method not implemented.');
  }

  findAll() {
    return `This action returns all bot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bot`;
  }

  update(id: number, updateBotDto: UpdateBotDto) {
    return `This action updates a #${id} bot`;
  }

  remove(id: number) {
    return `This action removes a #${id} bot`;
  }
}
