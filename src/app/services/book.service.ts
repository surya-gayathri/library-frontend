import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get("https://library-apidyno.herokuapp.com/api/book/all");
  }
  getBook(_id: any) {
    return this.http.get("https://library-apidyno.herokuapp.com/api/book/" + _id)
  }
  addBook(payLoad: any) {
    return this.http.post("https://library-apidyno.herokuapp.com/api/book/", JSON.parse(payLoad))
  }
  deleteBook(_id: any) {
    return this.http.delete("https://library-apidyno.herokuapp.com/api/book/" + _id)
  }

  updateBook(_id: any, payLoad: any) {
    return this.http.patch("https://library-apidyno.herokuapp.com/api/book/" + _id, payLoad)
  }
}
