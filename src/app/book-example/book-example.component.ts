import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-example',
  templateUrl: './book-example.component.html',
  styleUrls: ['./book-example.component.css']
})
export class BookExampleComponent {
  @Input() book;
}
