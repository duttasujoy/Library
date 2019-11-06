import {Component, OnInit, Input} from "@angular/core";
import {Book} from "../shared/book";
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  id;
  book;
  successMessage = null;
  dueDate: Date;
  constructor(private route: ActivatedRoute , private bookApi: BookApiService) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('Sujoy ' + this.id);
    this.getBook(this.id);
  }
  getBook(bookId: string) {
    this.bookApi.findById(bookId).subscribe(data => {
      this.book = data;
      console.log( data);
    });
  }

  removeBook() {
    this.bookApi.deleteById(this.book.id).subscribe(data => {
      this.successMessage = data.message;
      console.log( this.successMessage);
      setTimeout(() =>  this.successMessage = null, 5000);
    });
  }
}
