import { Injectable, NotFoundException } from '@nestjs/common';
import { Phone } from './interfaces/phone.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Injectable()
export class PhonesService {
  private phones: Phone[] = [
    {
      phone: 1148869872,
      id: uuidv4(),
      model: 'Motorola',
    },
    {
      phone: 1140644852,
      id: uuidv4(),
      model: 'Nokia',
    },
    {
      phone: 1140669852,
      id: uuidv4(),
      model: 'Samsung',
    },
  ];

  findAllPhones() {
    return this.phones;
  }
  findByOnePhone(id: string) {
    const phone = this.phones.find((element) => {
      return element.id === id;
    });
    if (!phone) throw new NotFoundException('Phone not found the id is ' + id);

    return phone;
  }
  create(createPhoneDto: CreatePhoneDto) {
    const phone: Phone = {
      id: uuidv4(),
      ...createPhoneDto,
    };

    this.phones.push(phone);

    return phone;
  }
}
