import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/shared/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookAuthApiService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    const extraHeaders = new HttpHeaders({
      Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjEyNTc2NTczLCJlbWFpbCI6ImpjcmFtaXJlenRlbGxvQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNjEyNTcyOTczfQ.fwXLVK-3r_4yPcOAKeDkpzAvi1CqeVJ2Szj1ZATmD7k'
    })
    return this.http.get<Book[]>(`${this.apiUrl}/book/`, {
      headers: extraHeaders
    });
  }
}
