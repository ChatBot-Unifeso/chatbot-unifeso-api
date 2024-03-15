import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id_employee')
  findOne(@Param('id_employee') id_employee: string) {
    return this.employeeService.findOne(id_employee);
  }

  @Patch(':id_employee')
  update(@Param('id_employee') id_employee: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id_employee, updateEmployeeDto);
  }

  @Delete(':id_employee')
  remove(@Param('id_employee') id_employee: string) {
    return this.employeeService.remove(id_employee);
  }
}
