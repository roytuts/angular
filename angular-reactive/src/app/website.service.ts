import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Website } from './website';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class WebsiteService {

  private websiteUrl = 'http://localhost:9999/website';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET websites from the server */
  getWebsites(): Observable<Website[]> {
    return this.http.get<Website[]>(this.websiteUrl);
  }
  
  /** GET website by id. Will 404 if id not found */
  getWebsite(id: number): Observable<any> {
    const url = `${this.websiteUrl}/${id}`;
    return this.http.get<Website>(url);
  }
  
  /** POST: add a new website to the server */
  addWebsite(website: Website) {
	//console.log(website);
    return this.http.post(this.websiteUrl, website, httpOptions);
  }
  
  /** PUT: update the website on the server */
  updateWebsite(website: Website): Observable<any> {
    return this.http.put(this.websiteUrl, website, httpOptions);
  }
  
  /** DELETE: delete the website from the server */
  deleteWebsite(website: Website | number) {
	  if (confirm("Are you sure to delete?")) {
		const id = typeof website === 'number' ? website : website.id;
		const url = `${this.websiteUrl}/${id}`;
		return this.http.delete(url, httpOptions);
	  }
	  return of({});
  }
  
}