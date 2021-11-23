import { Component, OnInit } from '@angular/core';
import { Addcompany } from '../addcompany'
import { AddcompanyService } from '../addcompany.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany-list',
  templateUrl: './addcompany-list.component.html',
  styleUrls: ['./addcompany-list.component.css']
})
export class AddcompanyListComponent implements OnInit {
  


  addcompanys: Addcompany[];
  

  constructor(private addcompanyService: AddcompanyService,
    private router: Router) { }

  ngOnInit(): void 
  {
   this.getorders();
  }
  private getorders(){
    this.addcompanyService.getaddcompanyList().subscribe(data => {
      this.addcompanys = data;
    });
  }

  addcompanyDetails(id: number){
    this.router.navigate(['addcompany-details', id]);
  }
back()
{
  this.router.navigate(['admin-page']);
}
  updateAddcompany(id: number){
    this.router.navigate(['update-addcompany', id]);
  }

  deleteAddcompany(id: number){
    this.addcompanyService.deleteAddcompany(id).subscribe( data => {
      console.log(data);
      this.getorders();
    })
  
  }
}