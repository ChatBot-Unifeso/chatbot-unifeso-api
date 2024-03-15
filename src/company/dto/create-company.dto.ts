// se baseia no arquivo schema.prisma

import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  slug: string;
}
