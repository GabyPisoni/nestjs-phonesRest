import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Body } from '@nestjs/common';
import { PhonesService } from './phones.service';

@Controller('phones')
export class PhonesController {
  constructor(
    private readonly phonesService: PhonesService
  ) { }
  @Get()
  getAllPhones() {
    return this.phonesService.findAllPhones();
  }

  @Get(":id")
  getPhonesById(@Param("id", ParseIntPipe) id: number) {
    return this.phonesService.findByOnePhone(+id);

  }
  @Post(":id")
  createPhone( @Body() body: any ) {
    return body;
  }

  @Patch(':id')
  updatePhone( 
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: any ) 
  {
    return body;
  }

  @Delete(':id')
  deletePhone( @Param('id', ParseIntPipe ) id: number ) {
    return {
      method: 'delete',
      id
    };
  }
}
