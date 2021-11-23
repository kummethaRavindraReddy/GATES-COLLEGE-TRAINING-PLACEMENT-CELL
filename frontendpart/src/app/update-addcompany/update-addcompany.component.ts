import { Component, OnInit } from '@angular/core';
import { AddcompanyService } from '../addcompany.service';
import { Addcompany } from '../addcompany';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-addcompany',
  templateUrl: './update-addcompany.component.html',
  styleUrls: ['./update-addcompany.component.css']
})
export class UpdateAddcompanyComponent implements OnInit {
  id: number;
  addcompany: Addcompany= new Addcompany();
  
  
  constructor(private addcompanyService: AddcompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
     this.addcompanyService.getaddcompanyById(this.id).subscribe(data => {
       this.addcompany = data;
     }, error => console.log(error));
   }
   onSubmit(){
    this.addcompanyService.updateAddcompany(this.id, this.addcompany).subscribe( data =>{
      this.goToAddcompanyList();
    }
    , error => console.log(error));
  }

  
  goToAddcompanyList(){
    this.router.navigate(['/addcompanylist']);
  }


}
