import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { Notebook, NotebookSchema } from 'src/schemas/notebook.schema';
import { User, UserSchema } from 'src/schemas/users.schema';
import { Favorite, FavoriteSchema } from 'src/schemas/favorite.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { NotebookService } from 'src/notebook/notebook.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Favorite.name, schema: FavoriteSchema },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Notebook.name, schema: NotebookSchema },
    ]),
    AuthModule,
  ],
  providers: [FavoriteService, FavoriteModule, UsersService, NotebookService],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
