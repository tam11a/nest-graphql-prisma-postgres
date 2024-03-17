/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
  name: string;
  categories?: Nullable<Nullable<string>[]>;
  description?: Nullable<string>;
  price: number;
  rent_price?: Nullable<number>;
  rent_module?: Nullable<string>;
}

export class UpdateProductInput {
  id: number;
  name: string;
  categories?: Nullable<Nullable<string>[]>;
  description?: Nullable<string>;
  price: number;
  rent_price?: Nullable<number>;
  rent_module?: Nullable<string>;
}

export class Product {
  id: number;
  name: string;
  categories?: Nullable<Nullable<string>[]>;
  description?: Nullable<string>;
  price: number;
  rent_price?: Nullable<number>;
  rent_module?: Nullable<string>;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
}

export abstract class IQuery {
  abstract products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;

  abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
  abstract createProduct(
    createProductInput: CreateProductInput,
  ): Product | Promise<Product>;

  abstract updateProduct(
    updateProductInput: UpdateProductInput,
  ): Product | Promise<Product>;

  abstract removeProduct(
    id: number,
  ): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
