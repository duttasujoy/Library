import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../shared/book-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any;
  bookId: any;
  title: any;
  p;

  constructor(private bookApi: BookApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];
    this.getBook(this.bookId);
  }

  getBook(bookId: string) {
    this.bookApi.findHistoryById(bookId).subscribe(data => {
      this.history = data;
      console.log( data);
    });
  }
}
