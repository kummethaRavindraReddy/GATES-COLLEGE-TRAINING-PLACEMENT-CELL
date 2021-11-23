import { Component, OnInit } from '@angular/core';
import { Applynow } from '../applynow';
import { ActivatedRoute } from '@angular/router';
import { ApplynowService } from '../applynow.service';

@Component({
  selector: 'app-applynow-details',
  templateUrl: './applynow-details.component.html',
  styleUrls: ['./applynow-details.component.css']
})
export class ApplynowDetailsComponent implements OnInit {

  id: number
  applynow: Applynow
  route: any;
  constructor(privateroute: ActivatedRoute, private applynowService: ApplynowService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
        this.applynow = new Applynow();
        this.applynowService.getApplynowById(this.id).subscribe( data => {
          this.applynow = data;
        });
  }
  
}