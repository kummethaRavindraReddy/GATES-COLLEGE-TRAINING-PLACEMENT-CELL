// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { StudentService } from '../student.service';

// @Component({
//   selector: 'app-company',
//   templateUrl: './company.component.html',
//   styleUrls: ['./company.component.css']
// })
// export class CompanyComponent implements OnInit {

//   constructor(private router: Router,private student : StudentService) { }

//   ngOnInit(): void {
//   }
  
//   company = [

//     { 'id': 1, 'name': 'TECH-MAHINDRA', 'description': "Indian multinational provider of information technology, networking technology solutions and business support services to the telecommunications industry", 'image': '../../assets/m2.jpg' },
//     { 'id': 2, 'name': 'WIPRO', 'description': "Wipro Limited is an Indian multinational corporation that provides information technology,consulting and business process services.Fortune India 500 ranks it the 29th largest Indian company by total revenue.", 'image': '../../assets/m03.jpg' },
//     { 'id': 3, 'name': 'INTELLECT', 'description': "Intellect Design Arena Limited is a global leader in Financial Technology for Banking, Insurance and other Financial Services.", 'image': '../../assets/d1.jpg' },
    
//   ]

//   onapplynow(companyName: String)
//    {
//     const student=this.student.registerStudent;
//     if(student?.firstName && student?.lastName)
//     {
//       const fullName=student.firstName+' '+student.lastName;
      
//       this.router.navigate(['applynow'], 
//       {
//         queryParams: { companyName,fullName}
//        })
//     }
//     else
//     {
//       alert('Please Register..');
//       this.router.navigate(['create-student'])
//     }
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addcompany } from '../addcompany';
import { AddcompanyService } from '../addcompany.service'
import { StudentService } from '../student.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  login: any;
  addcompany:Addcompany[];
 

  constructor(private router: Router,private student : StudentService,private addcompanyService: AddcompanyService,) { }

  ngOnInit(): void {
    this.getapplied();
  }
  private getapplied(){
  this.addcompanyService.getaddcompanyList().subscribe(data => {
  this.addcompany = data;
  });
  }


    
  // logout()
  // {
  //   this.router.navigate(['/home']);
  // }

  onapplynow(companyName: String)
  
   {
  
    const student=this.student.registerStudent;
   if(student?.firstName && student?.lastName)
   {
    const fullName=student.firstName+' '+student.lastName;
      
     this.router.navigate(['applynow'], 
      {
       queryParams: { companyName,fullName}
      })
     }
     else
     {
       alert('Please Register..');
       this.router.navigate(['create-student'])
     }
   }
 }

