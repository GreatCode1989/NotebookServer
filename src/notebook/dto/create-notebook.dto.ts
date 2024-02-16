import { IsNotEmpty } from 'class-validator';

export class CreateNotebookDto {
  @IsNotEmpty()
  readonly text: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly about: string;

  @IsNotEmpty()
  readonly display: string;

  @IsNotEmpty()
  readonly cpu: string;

  @IsNotEmpty()
  readonly gpu: string;

  @IsNotEmpty()
  readonly memory: string;

  @IsNotEmpty()
  readonly battery: string;

  @IsNotEmpty()
  readonly set: string;

  @IsNotEmpty()
  readonly brand: string;

  @IsNotEmpty()
  readonly ssd: string;

  @IsNotEmpty()
  readonly camera: boolean;

  @IsNotEmpty()
  readonly gpu2: string;

  @IsNotEmpty()
  readonly os: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly material: string;

  @IsNotEmpty()
  readonly image: number;

  @IsNotEmpty()
  readonly in_stock: number;

  @IsNotEmpty()
  readonly in_shop: boolean;

  @IsNotEmpty()
  readonly popularity: boolean;

  @IsNotEmpty()
  readonly old: boolean;
}
