import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeeService,
    private jwtService: JwtService
  ) { }

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ token: string }> {
    const employee = await this.employeeService.findByEmail(email);
    if (employee?.password !== pass) {
      throw new UnauthorizedException();
    }
    delete employee.password;
    delete employee.salt;
    const payload = employee;
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}