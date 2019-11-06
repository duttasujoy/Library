import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookApiService } from '../shared/book-api.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
@ViewChild('f', {static: true}) bookForm: NgForm
  successMessage: any;
  constructor(private bookApi: BookApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    console.log(this.bookForm.value);
    this.bookApi.save(this.bookForm.value).subscribe(data => {
      this.successMessage = data.message;
      console.log( this.successMessage);
      setTimeout(() =>  this.successMessage = null, 5000);
    });

    this.bookForm.reset();
  }

}
