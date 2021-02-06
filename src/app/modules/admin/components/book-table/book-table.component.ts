import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';
import { BookAuthApiService } from '../../services/book-auth-api.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  books: Book[]; 
  constructor(
    private bookService: BookAuthApiService
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
