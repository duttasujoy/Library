import {Component, OnInit} from '@angular/core';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: [];
  p;

  constructor(private bookApi: BookApiService) {
  }
  ngOnInit() {
    this.bookApi.findAll().subscribe( data => {
      this.books = data;
      console.log(data);
    });
    console.log(this.books);
  }

}
