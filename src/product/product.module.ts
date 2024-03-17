import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ProductResolver, ProductService],
  imports: [PrismaModule],
})
export class ProductModule {}
