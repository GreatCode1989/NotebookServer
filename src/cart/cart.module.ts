import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { UsersService } from 'src/users/users.service';
import { NotebookService } from 'src/notebook/notebook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from 'src/schemas/cart.schemas';
import { User, UserSchema } from 'src/schemas/users.schema';
import { Notebook, NotebookSchema } from 'src/schemas/notebook.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Notebook.name, schema: NotebookSchema },
    ]),
    AuthModule,
  ],
  providers: [CartService, CartModule, UsersService, NotebookService],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
