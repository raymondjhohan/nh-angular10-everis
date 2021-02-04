import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';
import { BookMockService } from 'src/app/shared/services/book/book-mock.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() bookId;
  book: Book;
  constructor(
    private bookService: BookMockService
  ) { }

  ngOnInit(): void {
    this.fetchBook();
  }

  fetchBook() {
    this.bookService.getBook(this.bookId).subscribe(
      book => this.book = book
    )
  }

}
