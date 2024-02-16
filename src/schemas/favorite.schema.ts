import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, type: Types.ObjectId })
  userId: string | Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId })
  partId: string | Types.ObjectId;

  @Prop({ required: true })
  image: string[];

  @Prop({ defaultValue: false })
  old: boolean;

  @Prop({ required: true })
  in_shop: boolean;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
