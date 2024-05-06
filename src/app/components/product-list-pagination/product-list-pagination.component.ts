import { Component } from '@angular/core';
import * as productsData from './products.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list-pagination',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './product-list-pagination.component.html',
  styleUrl: './product-list-pagination.component.css'
})
export class ProductListPaginationComponent {
  productArr:any=(productsData as any).default;
  p:any;

  sortByRatingAsc(){
  this.productArr.sort((a:any,b:any)=>{return a['rating']['rate'] - b['rating']['rate']});
  }

  sortByRatingDsc(){
    this.productArr.sort((a:any,b:any)=>{return b['rating']['rate'] - a['rating']['rate']});
  }

}
