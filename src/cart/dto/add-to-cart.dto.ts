import { IsNotEmpty } from 'class-validator';

export class AddToCartDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  readonly partId: string;
}
