import { Injectable } from '@nestjs/common';
import { createHmac, randomBytes } from 'crypto';
import { CreateUserInput, UpdateUserInput } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private generateHash(salt: string, password: string) {
    const hashedPassword = createHmac('sha256', salt)
      .update(password)
      .digest('hex');
    return hashedPassword;
  }

  create(createUserInput: CreateUserInput) {
    const salt = randomBytes(32).toString('hex');
    return this.prisma.user.create({
      data: {
        email: createUserInput?.email,
        firstName: createUserInput?.firstName,
        lastName: createUserInput?.lastName,
        password: this.generateHash(salt, createUserInput?.password),
        salt,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: updateUserInput?.email,
        firstName: updateUserInput?.firstName,
        lastName: updateUserInput?.lastName,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
