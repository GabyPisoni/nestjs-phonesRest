import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PhonesService {
    private phones = [{
        phone: 1148869872,
        id: 0, model: "Motorola"
    }, {
        phone: 1140644852,
        id: 1, model: "Nokia"
    }, {
        phone: 1140669852,
        id: 2, model: "Samsung"
    },];

    findAllPhones() {
        return this.phones;
    }
    findByOnePhone(id: number) {

        const phone = this.phones.find((element) => {
            return element.id == id
        });
        if (!phone)
            throw new NotFoundException("Phone not found the id is " + id);

        return phone;
    }
}
