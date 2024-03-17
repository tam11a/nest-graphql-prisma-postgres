import { Injectable } from '@nestjs/common';
import { CreateProductInput, UpdateProductInput } from 'src/graphql';
import { PrismaModule } from 'src/prisma/prisma.module';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaModule) {}

  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
