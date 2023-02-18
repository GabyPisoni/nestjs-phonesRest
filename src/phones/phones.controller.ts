import {
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}
  @Get()
  getAllPhones() {
    return this.phonesService.findAllPhones();
  }

  @Get(':id')
  getPhonesById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.phonesService.findByOnePhone(id);
  }
  @Post()
  createPhone(@Body() createPhoneDto: CreatePhoneDto) {
    return createPhoneDto;
  }

  @Patch(':id')
  updatePhone(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deletePhone(@Param('id') id: string) {
    return {
      method: 'delete',
      id,
    };
  }
}
