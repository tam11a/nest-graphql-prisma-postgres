import { Injectable } from '@nestjs/common';
import { CreateProductInput, UpdateProductInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    /***
     * 
      {
        "createProductInput": {
          "name": "RTX-2050", 
          "categories": ["GPU", "Graphics", "RTX"], 
          "description": "Graphics Card I Want to Rent", 
          "price": 20000, 
          "rent_price": 500, 
          "rent_module": "H"
        }
      }
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
    /**
     query Query {
      products {
        id
        name
        categories
      }
    }
     */
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    /**
     query Query {
      product(id: 1) {
        id
        name
        categories
      }
    }
     */
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    /**
     {
        "updateProductInput":{
          "id": 4,
          "name": "RTX-2050", 
          "categories": ["GPU", "Graphics", "RTX"], 
          "description": "Graphics Card I Want to Rent", 
          "price": 26000, 
          "rent_price": 500, 
          "rent_module": "H"
        }
      }

      mutation UpdateProduct($updateProductInput: UpdateProductInput!){
        updateProduct(updateProductInput: $updateProductInput){
          id
          name
          categories
          price
        }
      }
     */
    return this.prisma.product.update({
      where: { id },
      data: {
        name: updateProductInput?.name,
        categories: updateProductInput?.categories,
        description: updateProductInput?.description,
        price: updateProductInput?.price,
        rent_price: updateProductInput?.rent_price,
        rent_module: updateProductInput?.rent_module,
        updated_at: new Date(),
      },
    });
  }

  remove(id: number) {
    /**
     mutation DeleteProduct{
      removeProduct(id: 4) {
        id
        name
        price
        categories
      }
    }
    */
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
