import { Module } from '@nestjs/common';
import { PhonesModule } from './phones/phones.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [PhonesModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
