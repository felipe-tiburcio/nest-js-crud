import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(id: number): Book | undefined {
    const book = books.find((book) => book.id === id);
    return book;
  }
}
