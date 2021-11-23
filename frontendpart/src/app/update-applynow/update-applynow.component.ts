import { Component, OnInit } from '@angular/core';
import { ApplynowService } from '../applynow.service';
import { Applynow } from '../applynow';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-applynow',
  templateUrl: './update-applynow.component.html',
  styleUrls: ['./update-applynow.component.css']
})
export class UpdateApplynowComponent implements OnInit {
  id: number;
  applynow: Applynow= new Applynow();

  constructor(private applynowService: ApplynowService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
     this.applynowService.getApplynowById(this.id).subscribe(data => {
       this.applynow = data;
     }, error => console.log(error));
   }
   onSubmit(){
    this.applynowService.updateApplynow(this.id, this.applynow).subscribe( data =>{
      this.goToApplynowList();
    }
    , error => console.log(error));
  }
  
  goToApplynowList(){
    this.router.navigate(['/applynow-list']);
  }

}