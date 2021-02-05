import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book/book.service';
import { Book } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  books: Book[]; 
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    )
  }

}
