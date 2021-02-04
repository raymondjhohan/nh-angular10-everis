import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookMockService } from '../../services/book/book-mock.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() isFeatured: boolean = false;
  @Input() showBooks: number = 4;
  books: Book[];
  classShowBook: number;
  constructor(
    private bookService: BookMockService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.classShowBook = 12 / this.showBooks;
  }

  fetchBooks(): void {
    this.books = this.isFeatured ? this.bookService.getFeaturedBooks() : this.bookService.getBooks();
  }

}
