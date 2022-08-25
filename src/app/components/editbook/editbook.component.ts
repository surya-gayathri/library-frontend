import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  constructor(public bookServiceObj: BookService, private _Activatedroute: ActivatedRoute,
    private router: Router) { }

  sub
  bookdetails
  book = new BookModel(null, null, null, null, null)
  id

  ngOnInit(): void {

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get("id")
    })

    this.bookServiceObj.getBook(this.id).subscribe(data => {
      this.bookdetails = data
      this.book.title = this.bookdetails.title;
      this.book.desc = this.bookdetails.desc;
      this.book.author = this.bookdetails.author;
      this.book.about = this.bookdetails.about;
      this.book.imagePath = this.bookdetails.imagePath;
    })

  }


  onSubmit() {
    this.bookServiceObj.updateBook(this.id, this.book).subscribe((data) => {
      this.router.navigate(["bookShelf"]);
    });
  }

}
