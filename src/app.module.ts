import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from './bot/bot.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [CompanyModule, EmployeeModule, AuthModule, ConfigModule.forRoot(), BotModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
