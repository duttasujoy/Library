import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { PagerComponent } from './pager/pager.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbPaginationModule, NgbAlertModule,NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentComponent } from './assignment/assignment.component';
import { HistoryComponent } from './history/history.component';

const appRoutes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: '/search' },
  { path: 'library', component: LibraryComponent },
  { path: 'addBook', component: BookFormComponent },
  { path: 'search', component: SearchComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'assign/:id', component: AssignmentComponent },
  { path: 'history/:id/:title', component: HistoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    LibraryComponent,
    SearchComponent,
    HeaderComponent,
    PagerComponent,
    BookFormComponent,
    AssignmentComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgbAlertModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
