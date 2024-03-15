import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { prisma } from '../prisma';

@Injectable()
export class CompanyService {
  async create(createCompanyDto: CreateCompanyDto) {
    createCompanyDto.slug = createCompanyDto.name.toLowerCase().replace(/ /g, '-');
    return await prisma.company.create({
      data: createCompanyDto
    })
  }

  async findAll() {
    return await prisma.company.findMany();
  }

  async findOne(id_company: string) {
    return await prisma.company.findUnique({
      where: { id_company }
    })
  }

  async update(id_company: string, updateCompanyDto: UpdateCompanyDto) {

    if (updateCompanyDto.name) updateCompanyDto.slug = updateCompanyDto.name.toLowerCase().replace(/ /g, '-')

    return await prisma.company.update({
      where: { id_company },
      data: updateCompanyDto
    })
  }

  async remove(id_company: string) {
    return await prisma.company.delete({
      where: { id_company }
    })
  }
}
