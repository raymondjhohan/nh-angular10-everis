import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booklistas',
  templateUrl: './booklistas.component.html',
  styleUrls: ['./booklistas.component.scss']
})
export class BooklistasComponent implements OnInit {
  @Input() Book : any;
  constructor() { }

  ngOnInit(): void {
  }

}
