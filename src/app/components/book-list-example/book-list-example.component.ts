import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  selectedBookGrupo: any;
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.selectedBookGrupo = [];
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
    console.log(this.selectedBooks);
   
    let encontrado = false;
    for(var item of this.selectedBookGrupo){
      if(book.name == item.nombre)
      {
      item.count = item.count + 1;
      encontrado = true;
      break;
      }

    }
      if(encontrado == false){
        this.selectedBookGrupo.push( {"nombre": book.name, "count": 1} );
      } 
  }



}
