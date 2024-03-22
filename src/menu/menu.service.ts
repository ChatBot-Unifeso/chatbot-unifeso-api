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

  async findOne(id_menu: string) {
    return await prisma.menu.findUnique({
      where: {
        id_menu
      }
    });

  }

  async update(id_menu: string, updateMenuDto: UpdateMenuDto) {
    return await prisma.menu.update({
      where: {
        id_menu
      },
      data: updateMenuDto
    });
  }

  async remove(id_menu: string) {
    return await prisma.menu.delete({
      where: {
        id_menu
      }
    });
  }
}
