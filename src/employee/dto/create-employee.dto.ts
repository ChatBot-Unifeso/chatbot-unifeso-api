import { Roles } from "@prisma/client";

export class CreateEmployeeDto {
  id_company: string
  data_employee: {
    name: string;
    email: string;
    password: string;
    salt: string;
    roles: 'adm' | 'user';
  }

}
