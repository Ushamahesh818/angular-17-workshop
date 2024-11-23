import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  userData:any=[];
    constructor(private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
      this.activatedRoute.queryParams.subscribe(params=>{
      this.userData=params;
      })
    }
}
