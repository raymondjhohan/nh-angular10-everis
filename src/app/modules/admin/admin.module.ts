import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BookCreatePageComponent } from './pages/book-create-page/book-create-page.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { BookTableComponent } from './components/book-table/book-table.component';

@NgModule({
  declarations: [LoginPageComponent, BookListPageComponent, BookCreatePageComponent, BookTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    PanelModule,
  ]
})
export class AdminModule { }
