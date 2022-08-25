import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { EditbookComponent } from './components/editbook/editbook.component';
import { LoginComponent } from './components/login/login.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "bookShelf", component: BookShelfComponent },
  { path: "addBook", component: NewBookComponent },
  { path: "bookShelf/editBook/:id", component: EditbookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
