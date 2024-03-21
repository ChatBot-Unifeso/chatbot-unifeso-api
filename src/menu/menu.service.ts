import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { prisma } from 'src/prisma';

@Injectable()
export class MenuService {
  async create(createMenuDto: CreateMenuDto) {
    const { data_menu, phone_bot } = createMenuDto;
    return await prisma.menu.create({
      data: {
        title: data_menu.title,
        Bot: {
          connect: {
            phone: phone_bot
          }
        }
      }
    });
  }

  async findAll() {
    return await prisma.menu.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
