import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookController } from './notebook.controller';
import { Notebook, NotebookSchema } from 'src/schemas/notebook.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notebook.name, schema: NotebookSchema },
    ]),
  ],
  providers: [NotebookService],
  exports: [NotebookService],
  controllers: [NotebookController],
})
export class NotebookModule {}
