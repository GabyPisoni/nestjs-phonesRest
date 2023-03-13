import { Injectable } from '@nestjs/common';
import {
  PHONES_SEED
} from './data/phones.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  populatedDB() {
    return PHONES_SEED;
  }
}