import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
  private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      alert("login successful");
      this.router.navigate(['applynow-list']);
      //this.router.navigate(['/students']);
      this.invalidLogin = false

    } else{
      alert("Please enter correct credentials or missing credentials ");
      this.invalidLogin = true
    }
  }

}