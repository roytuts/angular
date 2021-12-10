import { Injectable } from '@angular/core';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Website } from './website.model';
 
const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
 
  private baseUrl = 'http://localhost:8080';  // Base URL to REST API

  constructor(private http: HttpClient) { }

  /** GET websites from the server */
  getWebsites(): Observable<Website[]> {
	 return this.http.get<Website[]>(this.baseUrl + '/websites');
  }

  /** GET website by id. Will 404 if id not found */
  getWebsite(id: string): Observable<any> {
	 const url = `${this.baseUrl}/website/${id}`;
	 return this.http.get<Website>(url);
  }

  /** POST: add a new website to the server */
  addWebsite(website: Website) {
	 console.log(website);
	 return this.http.post(this.baseUrl + '/website', website, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  /** PUT: update the website on the server */
  updateWebsite(website: Website): Observable<any> {
	 return this.http.put(this.baseUrl + '/website', website, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  /** DELETE: delete the website from the server */
  deleteWebsite(website: Website) {
	if (confirm("Are you sure to delete?")) {
	 console.log(website);

	 const options = {
	   headers: new HttpHeaders({
				   'Content-Type': 'application/json',
	   }),
	   body: website,
	   responseType: 'text' as 'json'
	 };
	
	 return this.http.delete(this.baseUrl + '/website/' + website.id, options);
	}
   
	return of({});
  }
 
}
