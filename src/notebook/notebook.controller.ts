import {
  Body,
  Controller,
  Post,
  Get,
  Res,
  UseGuards,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookGuard } from './guard/notebook.guard';
import { CreateNotebookDto } from './dto/create-notebook.dto';
import { Response } from 'express';
import { Notebook } from 'src/schemas/notebook.schema';

@Controller('notebook')
export class NotebookController {
  constructor(private notebookService: NotebookService) {}

  @UseGuards(NotebookGuard)
  @Post('create')
  async createNotebook(
    @Body() createNotebookDto: CreateNotebookDto,
    @Res() res: Response,
  ) {
    try {
      const result =
        await this.notebookService.createNotebook(createNotebookDto);

      res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      console.error('Error create notebook!:', error);

      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ errorMessage: 'Internal Server Error' });
    }
  }

  @Post('search')
  async search(@Body() { search }: { search: string }) {
    try {
      const searchNotebook = await this.notebookService.searchItem(search);
      return searchNotebook;
    } catch (error) {
      console.error('Error getting search notebook:', error);
      throw error;
    }
  }

  @Get('popularity')
  async getPopularNotebooks(): Promise<Notebook[]> {
    try {
      const popularNotebooks = await this.notebookService.popularity();
      return popularNotebooks;
    } catch (error) {
      console.error('Error getting popular notebooks:', error);
      throw error;
    }
  }

  @Get('old')
  async getOldNotebooks(): Promise<Notebook[]> {
    try {
      const oldNotebooks = await this.notebookService.old();
      return oldNotebooks;
    } catch (error) {
      console.error('Error getting old clothes:', error);
      throw error;
    }
  }

  @Get('all')
  async getAllNotebooks(): Promise<Notebook[]> {
    try {
      const notebooks = await this.notebookService.findAll();

      if (!notebooks || notebooks.length === 0) {
        throw new NotFoundException('No notebooks found');
      }

      return notebooks;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Notebook> {
    try {
      const notebook = await this.notebookService.findOneById(id);

      if (!notebook) {
        throw new NotFoundException(`Notebook with id ${id} not found`);
      }

      return notebook;
    } catch (error) {
      throw error;
    }
  }
}
