import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _httpClient:HttpClient) { }

  fetchProductInfo(id:any){
   return this._httpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}
