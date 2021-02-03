import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookShortComponent } from './components/book-short/book-short.component';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookShortComponent,
    FormMessageErrorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent,
    FormMessageErrorComponent,
  ]
})
export class SharedModule { }
