import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type NotebookDocument = Notebook & Document;

@Schema()
export class Notebook {
  @Prop({ required: true })
  text: string;
  _id: mongoose.Types.ObjectId | string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  about: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  display: string;

  @Prop({ required: true })
  cpu: string;

  @Prop({ required: true })
  gpu: string;

  @Prop({ required: true })
  gpu2: string;

  @Prop({ required: true })
  memory: string;

  @Prop({ required: true })
  ssd: string;

  @Prop({ required: true })
  battery: string;

  @Prop({ required: true })
  camera: boolean;

  @Prop({ required: true })
  set: string;

  @Prop({ required: true })
  os: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  material: string;

  @Prop({ required: true })
  image: string[];

  @Prop({ required: true })
  in_stock: number;

  @Prop({ required: true })
  in_shop: boolean;

  @Prop({ defaultValue: false })
  popularity: boolean;

  @Prop({ defaultValue: false })
  old: boolean;
}

export const NotebookSchema = SchemaFactory.createForClass(Notebook);
