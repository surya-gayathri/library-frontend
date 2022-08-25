import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  book = new BookModel(null, null, null, null, null)


  constructor(public bookServiceObj: BookService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    this.bookServiceObj.addBook(this.book).subscribe((data) => {
      this.router.navigate(["bookShelf"]);
    });


    // var newBook = {
    //   "title": this.reactiveForm.value.title,
    //   "desc": this.reactiveForm.value.desc,
    //   "author": this.reactiveForm.value.author,
    //   "about": this.reactiveForm.value.about,
    //   "imagePath": this.reactiveForm.value.imagePath
    // }
    // var book = new BookModel(this.reactiveForm.value.title, this.reactiveForm.value.about, this.reactiveForm.value.desc, this.reactiveForm.value.author, this.reactiveForm.value.imagePath)

  }
}
