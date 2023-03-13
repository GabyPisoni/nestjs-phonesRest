import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";
export const BRANDS_SEED: Brand[] = [
    { name: "IPhone", createdAt: new Date().getTime(), id: uuid() },
    { name: "Nokia", createdAt: new Date().getTime(), id: uuid() },
    { name: "Samsung", createdAt: new Date().getTime(), id: uuid() },
    { name: "Sony", createdAt: new Date().getTime(), id: uuid() },
    { name: "Motorola", createdAt: new Date().getTime(), id: uuid() },
    { name: "IPhone", createdAt: new Date().getTime(), id: uuid() },
] 