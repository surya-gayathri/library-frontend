import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {

  books: any;

  constructor(public bookServiceObj: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookServiceObj.getBooks().subscribe((books) => {
      this.books = books
    })
  }
  onDelete(_id: any) {
    this.bookServiceObj.deleteBook(_id).subscribe((res) => {
      this.ngOnInit();
    })
  }

  onEdit(_id: any) {
    console.log("Edit", _id)
  }

}
