import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notebook, NotebookDocument } from 'src/schemas/notebook.schema';
import { CreateNotebookDto } from './dto/create-notebook.dto';

@Injectable()
export class NotebookService {
  constructor(
    @InjectModel(Notebook.name) private notebookModel: Model<NotebookDocument>,
  ) {}

  async findAll(): Promise<Notebook[]> {
    return this.notebookModel.find().exec();
  }

  async searchItem(query: string): Promise<Notebook[]> {
    const regexQuery = new RegExp(query, 'i');

    return this.notebookModel
      .find({
        text: { $regex: regexQuery },
      })
      .exec();
  }

  async popularity(): Promise<Notebook[]> {
    return this.notebookModel
      .find({
        popularity: true,
      })
      .exec();
  }

  async old(): Promise<Notebook[]> {
    return this.notebookModel
      .find({
        old: true,
      })
      .exec();
  }

  async findOneById(id: string): Promise<Notebook | null> {
    return this.notebookModel.findById(id).exec();
  }

  async createNotebook(
    createNotebookDto: CreateNotebookDto,
  ): Promise<Notebook> {
    try {
      const notebook = new this.notebookModel({
        text: createNotebookDto.text,
        brand: createNotebookDto.brand,
        description: createNotebookDto.description,
        price: createNotebookDto.price,
        about: createNotebookDto.about,
        display: createNotebookDto.display,
        cpu: createNotebookDto.cpu,
        gpu: createNotebookDto.gpu,
        gpu2: createNotebookDto.gpu2,
        memory: createNotebookDto.memory,
        ssd: createNotebookDto.ssd,
        battery: createNotebookDto.battery,
        set: createNotebookDto.set,
        os: createNotebookDto.os,
        camera: createNotebookDto.camera,
        material: createNotebookDto.material,
        image: createNotebookDto.image,
        in_stock: createNotebookDto.in_stock,
        in_shop: createNotebookDto.in_shop,
        popularity: createNotebookDto.popularity,
        old: createNotebookDto.old,
      });

      return notebook.save();
    } catch (error) {
      console.error('Ошибка создания базы данных с ноутбуками', error);
      throw error;
    }
  }
}
