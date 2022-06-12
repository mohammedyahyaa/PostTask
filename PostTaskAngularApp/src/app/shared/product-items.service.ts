import { Injectable } from '@angular/core';
import { ProductItems } from './product-items.model';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {

  constructor(private http: HttpClient) { }

  readonly baseURL='https://localhost:44350/api/ProductItems'
  formData:ProductItems=new ProductItems() ;
  
  list : ProductItems[]

  postProductDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putProductDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.Id}`, this.formData);
  }

  deleteProductDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then( res =>this.list = res as ProductItems[]);
 
  }


}
