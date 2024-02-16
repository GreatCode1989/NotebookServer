import { IsNotEmpty } from 'class-validator';

export class AddToFavoriteDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  readonly partId: string;
}
