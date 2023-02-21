import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdatePhoneDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly phone?: string;

  @MinLength(3, { message: 'Tienen que venir mas caracteres' })
  @IsString()
  @IsOptional()
  readonly model?: string;
}
