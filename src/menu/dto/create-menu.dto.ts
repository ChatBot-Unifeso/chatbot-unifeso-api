import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

class MenuDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  phone_bot: string

  @ValidateNested()
  @Type(() => MenuDto)
  @IsNotEmpty()
  data_menu: MenuDto
}
