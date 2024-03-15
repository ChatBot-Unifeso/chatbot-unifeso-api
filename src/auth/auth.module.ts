import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmployeeModule } from '../employee/employee.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './guards/jwt.guard';
import { EmployeeService } from 'src/employee/employee.service';

@Module({
  imports: [
    EmployeeModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT_KEY,
    }),
  ],
  providers: [
    AuthService,
    EmployeeService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }