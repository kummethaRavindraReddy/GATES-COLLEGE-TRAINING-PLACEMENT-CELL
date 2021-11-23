
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServicec } from '../servicec/authentication.servicec';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private Studentloginservicec: AuthenticationServicec) { }

  ngOnInit(){
  }

  checkLogin() {
    if (this.Studentloginservicec.authenticate(this.username, this.password)
    ) {
      alert("login successful");
      this.router.navigate(['/create-student'])
      this.invalidLogin = false
      
    } else
      {
      alert("Please enter correct credentials or missing credentials");
      this.invalidLogin = true
      }
  }

}
