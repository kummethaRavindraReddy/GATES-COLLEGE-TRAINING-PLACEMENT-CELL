import { Component, OnInit } from '@angular/core';
import { Applynow } from '../applynow'
import { ApplynowService } from '../applynow.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-applynow-list',
  templateUrl: './applynow-list.component.html',
  styleUrls: ['./applynow-list.component.css']
})
export class ApplynowListComponent implements OnInit {
  
  applynows: Applynow[];
  

  constructor(private applynowService: ApplynowService,
    private router: Router) { }

  ngOnInit(): void 
  {
   this.getapplied();
  }
  private getapplied(){
    this.applynowService.getApplynowList().subscribe(data => {
      this.applynows = data;
    });
  }

  applynowDetails(id: number){
    this.router.navigate(['applynow-details', id]);
  }

  updateApplynow(id: number){
    this.router.navigate(['update-applynow', id]);
  }

  deleteApplynow(id: number){
    this.applynowService.deleteapplynow(id).subscribe( data => {
      console.log(data);
      this.getapplied();
    })
  
  }
}