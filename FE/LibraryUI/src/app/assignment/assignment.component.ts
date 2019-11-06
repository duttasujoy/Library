import { Component, OnInit, ViewChild } from '@angular/core';
import { BookApiService } from '../shared/book-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AssignBook } from '../shared/assign-book';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  book: any;
  id: any;
  @ViewChild('f', {static: true}) bookForm: NgForm
  successMessage: any;
  constructor(private bookApi: BookApiService, private route: ActivatedRoute ) { }

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
  assignBook(form: NgForm) {
    console.log(this.bookForm.value);
    const startDate = this.bookForm.value.startDate;
    const dueDate = this.bookForm.value.dueDate;
    const assignee = this.bookForm.value.assignee;
    const assignedBook = new AssignBook(this.id, this.book.title, assignee, startDate, dueDate);
    console.log(assignedBook);
    this.bookApi.assign(assignedBook).subscribe(data => {
      this.successMessage = data.message;
      console.log( this.successMessage);
      setTimeout(() =>  this.successMessage = null, 5000);
    });

    this.bookForm.reset();
  }
}
