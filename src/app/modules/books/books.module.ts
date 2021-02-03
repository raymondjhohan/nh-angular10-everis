import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BookListPageComponent, BookDetailPageComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
  ]
})
export class BooksModule { }
