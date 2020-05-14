import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = 'http://localhost:8080';  // URL to REST API
  
  constructor(private http: HttpClient) { }
  
  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + '/products');
  }
  
  /** DELETE: delete the product from the server */
  deleteProducts(ids: number[]) {
	  if (confirm("Are you sure to delete?")) {
		const data = {'ids' : ids};
		const url = `${this.productUrl}/delete/products`;
		const options = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		
		const resp = this.http.post<any>(url, data, options);//.map(resp => {return resp;}).catch(err => {console.log(err);});
		
		//console.log('resp: ' + resp);
		
		return resp;
	  }
	  
	  return of({});
  }
}