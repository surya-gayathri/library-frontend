import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Library Login"
  user = new UserModel(null, null, null)
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }
  onSubmit(data: any) {
    this.userService.login(data).subscribe(res => {
      if (res == "Invalid Credentials!" || res == "Unable to get user!") {
        console.log("Nope")
      }
      else {
        this.userService.toggleLogin()
        this.router.navigate(["bookShelf"])
      }
    })
  }
}

