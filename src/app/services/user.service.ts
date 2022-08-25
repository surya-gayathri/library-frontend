import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(payload: any) {
    return this.http.post("https://library-apidyno.herokuapp.com/login", payload)
  }

  signup(payload: any) {
    return this.http.post("https://library-apidyno.herokuapp.com/signup", payload)

  }

  checkAuthState(): boolean {
    if (localStorage.getItem("authState") == "true")
      return true
    if (localStorage.getItem("authState") == "false")
      return false
    else return false
  }

  toggleLogin() {
    localStorage.setItem("authState", "true")
  }

  toggleLogout() {
    localStorage.setItem("authState", "false")
  }
}
