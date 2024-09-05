import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAll(): Book[] {
    return books;
  }

  findById(id: number): Book | undefined {
    const book = books.find((book) => book.id === id);
    return book;
  }

  save(book: Partial<Book>): Book | undefined {
    const newId = books[books.length - 1].id + 1;

    const newBook = {
      id: newId,
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
    };

    books.push(newBook);

    return newBook;
  }
}
