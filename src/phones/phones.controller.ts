import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreatePhoneDto, UpdatePhoneDto } from './dto/index';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}
  @Get()
  getAllPhones() {
    return this.phonesService.findAllPhones();
  }

  @Get(':id')
  getPhonesById(@Param('id', ParseUUIDPipe) id: string) {
    return this.phonesService.findByOnePhone(id);
  }
  @Post()
  createPhone(@Body() createPhoneDto: CreatePhoneDto) {
    return createPhoneDto;
  }

  @Patch(':id')
  updatePhone(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdatePhoneDto,
  ) {
    return body;
  }

  @Delete(':id')
  deletePhone(@Param('id', ParseUUIDPipe) id: string) {
    return this.phonesService.delete(id);
  }
}
