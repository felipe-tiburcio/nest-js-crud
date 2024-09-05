import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book | undefined {
    return this.booksService.findById(Number(id));
  }

  @Post()
  postBook(@Body() book: Partial<Book>): Book | undefined {
    if (!book.author || !book.title || !book.publicationYear) {
      return undefined;
    }

    return this.booksService.save(book);
  }

  @Put(':id')
  putBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    return this.booksService.update(Number(id), book);
  }
}
