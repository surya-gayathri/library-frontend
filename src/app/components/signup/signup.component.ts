import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new UserModel(null, null, null)

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }
  onSubmit(data: any) {
    this.userService.signup(data).subscribe(res => {
      if (res == "Invalid Credentials!" || res == "Unable to get user!") {
        console.log("Nope")
      }
      else {
        this.router.navigate(["login"])
      }
    })
  }


}
