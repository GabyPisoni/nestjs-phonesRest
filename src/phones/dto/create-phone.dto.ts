import { IsString, MinLength } from 'class-validator';

export class CreatePhoneDto {
  @IsString()
  readonly phone: string;
  @MinLength(3, { message: 'Tienen que venir mas caracteres' })
  @IsString()
  readonly model: string;
}
