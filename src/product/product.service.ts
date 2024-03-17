import { Injectable } from '@nestjs/common';
import { CreateProductInput, UpdateProductInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    /***
     * 
      mutation CreateProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {
          id
          name
          categories
          price
        }
      }
     */
    return this.prisma.product.create({
      data: {
        name: createProductInput?.name,
        categories: createProductInput?.categories,
        description: createProductInput?.description,
        price: createProductInput?.price,
        rent_price: createProductInput?.rent_price,
        rent_module: createProductInput?.rent_module,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    console.log(updateProductInput);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
