import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
