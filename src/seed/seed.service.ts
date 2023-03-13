import { Injectable } from '@nestjs/common';
import {
  PHONES_SEED
} from './data/phones.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { PhonesService } from 'src/phones/phones.service';
import { BrandsService } from 'src/brands/brands.service';
@Injectable()
export class SeedService {
constructor(private readonly phonesService: PhonesService,
  private readonly brandsService: BrandsService){

}
  populatedDB() {
    this.phonesService.fillPhonesIthSeedData(PHONES_SEED)
    this.brandsService.fillBrandsIthSeedData(BRANDS_SEED)

    return;

  }
}