import {Component, OnInit} from "@angular/core";
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books: [];
  constructor(private bookApi: BookApiService) {
  }

  ngOnInit() {
    this.bookApi.findAll().subscribe( data => {
      this.books = data;
    });
  }

}
