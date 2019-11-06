import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators/catchError'; 
import { Observable } from 'rxjs';
import { AssignBook } from './assign-book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  
  private url = 'http://ec2-3-14-85-111.us-east-2.compute.amazonaws.com:9095/';
  constructor(private http: HttpClient) { }

  save(book): Observable<any> {
    console.log(book);
    return this.http.post(this.url+'addBook', book,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  assign(assignedBook: AssignBook): Observable<any>  {
   return this.http.post(this.url+'assign',assignedBook,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
    });
  }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'findAll');
  }

  findHistoryById(bookId: string): Observable<any> {
    return this.http.get(this.url + 'findHistory/' + bookId);
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'findById/' + id);
  }

  deleteById(id: string): Observable<any> {
    return this.http.get(this.url + 'delete/' + id);
  }
  handleError(){
    alert('Sujoy');
  }
}
