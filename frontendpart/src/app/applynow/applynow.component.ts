import { Component, OnInit } from '@angular/core';
import { Applynow } from '../applynow';
import { ApplynowService } from '../applynow.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.css']
})
export class ApplynowComponent implements OnInit {
  
  
  Applynow: Applynow = new Applynow();

  constructor(private applynowService: ApplynowService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
  console.log(this.activatedRoute);
  this.activatedRoute.queryParams.subscribe((data)=>{                     ////queryparams
    this.Applynow.companyName=data.companyName;
    this.Applynow.fullName=data.fullName;
  })
  }
  
  saveApplynow() {
    this.applynowService.createapplying(this.Applynow).subscribe(data =>{
      console.log(data);
      this.goToHome();
    },
    error => {
      return console.log(error);
    });
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  


  onSubmit(){
    
    if(this.Applynow.companyName && this.Applynow.fullName &&this.Applynow.rollNo && this.Applynow.phoneNumber  && this.Applynow.address)
    {
      alert("applied successfully");
      console.log(this.Applynow);
      this.saveApplynow();
      
      
    }
    else{
      alert("You missed your data.....FullName,PhoneNumber,rollNo,Address are requied");
    }
}
}