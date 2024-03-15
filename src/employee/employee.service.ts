import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { prisma } from 'src/prisma';
import { genSaltSync } from 'bcryptjs';

@Injectable()
export class EmployeeService {
  async create(createEmployeeDto: CreateEmployeeDto) {
    const { id_company, data_employee } = createEmployeeDto
    const salt = genSaltSync(10)

    createEmployeeDto.data_employee.salt = salt

    return await prisma.employee.create({
      data: {
        ...data_employee,
        company: {
          connect: {
            id_company
          }
        }
      }
    })
  }

  async findAll() {
    return await prisma.employee.findMany()
  }

  async findOne(id_employee: string) {
    return await prisma.employee.findUnique({
      where: {
        id_employee
      }
    })
  }

  async update(id_employee: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await prisma.employee.update({
      where: {
        id_employee
      },
      data: updateEmployeeDto
    })
  }

  async remove(id_employee: string) {
    return await prisma.employee.delete({
      where: {
        id_employee
      }
    })
  }

  async findByEmail(email: string) {
    return await prisma.employee.findUnique({
      where: {
        email
      }
    })
  }
}
