import { Component, OnInit } from '@angular/core';
import { Addcompany } from '../addcompany';
import { AddcompanyService } from '../addcompany.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  addcompany : Addcompany=new Addcompany(); 
  constructor(private AddcompanyService: AddcompanyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAddcompany(){
    this.AddcompanyService.createaddcompany(this.addcompany).subscribe( data =>{
      console.log(data);
     // this.userService.registerUser=this.user;
      this.goToAddcompanyList();
    },
    error => {
      return console.log(error);
    });
  }

  goToAddcompanyList(){
    this.router.navigate(['/addcompanylist']);
  }

  back()
{
  this.router.navigate(['admin-page']);
}
  
  onSubmit(){

 if(this.addcompany.image && this.addcompany.companyName && this.addcompany.description)
    {
      console.log(this.addcompany);
      this.saveAddcompany();
    }
    else{
      alert("You missed your data.....below fields are requied");
    }
    // console.log(this.student);
    // this.saveStudent();
  }
}
