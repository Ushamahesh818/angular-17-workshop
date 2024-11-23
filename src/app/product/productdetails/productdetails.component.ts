import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  id:any;
  productInfo:any;

  constructor(private activatedRoute:ActivatedRoute,private _httpClient:HttpClient){
   
  }

  ngOnInit(){
    this.activatedRoute.data.subscribe(response=>{
      // next:(response)=>this.productInfo=response['product'],
      // error:(e)=>console.error(e),
      // complete:()=>console.info('completed')
      // this.id=+param['id'];
     // this.fetchProductInfo(this.id);
  this.productInfo=response['product'];
      },error=>console.error(error))    
  }

  //implemented Resolver for this so commenting it
  // fetchProductInfo(id:any){
  // this._httpClient.get(`https://fakestoreapi.com/products/${id}`).subscribe(response=>{
  //   this.productInfo=response;
  //   console.log(this.productInfo)
  // })
  // }

}
