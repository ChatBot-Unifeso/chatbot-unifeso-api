import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

class BotDto {
  @IsString()
  @IsNotEmpty()
  phone: string;
}

export class CreateBotDto {
  @IsString()
  @IsNotEmpty()
  id_company: string

  @ValidateNested()
  @Type(() => BotDto)
  @IsNotEmpty()
  data_bot: BotDto

}
