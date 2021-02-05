import { Observable } from 'rxjs';
import { Book } from './book';

export interface IBookService {
  getBooks(): Observable<Book[]>;
  getFeaturedBooks(): Observable<Book[]>;
  getBook(id: number): Observable<Book>;
}
