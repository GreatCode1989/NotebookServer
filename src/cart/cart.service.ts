import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from 'src/schemas/cart.schemas';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UsersService } from 'src/users/users.service';
import { NotebookService } from 'src/notebook/notebook.service';
import { CheckCartItemDto } from './dto/check-cart-item.dto';
import { GetCartUserIdDto } from './dto/get-cart-userid.dto';
import { DeleteCartDto } from './dto/delete-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    private readonly usersService: UsersService,
    private readonly notebookService: NotebookService,
  ) {}

  async add(addToCartDto: AddToCartDto) {
    const cart = new this.cartModel();
    const user = await this.usersService.findOne(addToCartDto.username);
    const part = await this.notebookService.findOneById(addToCartDto.partId);

    cart.userId = user._id;
    cart.partId = part._id;
    cart.text = part.text;
    cart.price = part.price;
    cart.image = part.image;
    cart.old = part.old;

    return cart.save();
  }

  async checkCartItem(checkCartItemDto: CheckCartItemDto) {
    const user = await this.usersService.findOneById(checkCartItemDto.userId);
    const part = await this.findOne(checkCartItemDto.partId);

    if (user && part) {
      return true;
    } else return false;
  }

  async removeCartItem(deleteCartDto: DeleteCartDto): Promise<boolean> {
    try {
      const result = await this.cartModel
        .deleteOne({
          _id: new Types.ObjectId(deleteCartDto.cartId),
        })
        .exec();

      return result.deletedCount > 0;
    } catch (error) {
      throw error;
    }
  }

  async findOne(partId: string): Promise<Cart | null> {
    return this.cartModel
      .findOne({ partId: new Types.ObjectId(partId) })
      .exec();
  }

  async getByUserId(getCartUserIdDto: GetCartUserIdDto): Promise<Cart[]> {
    return this.cartModel
      .find({ userId: new Types.ObjectId(getCartUserIdDto.userId) })
      .exec();
  }
}
