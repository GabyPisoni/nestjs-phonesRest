import { Module } from '@nestjs/common';
import { PhonesModule } from './phones/phones.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [PhonesModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
