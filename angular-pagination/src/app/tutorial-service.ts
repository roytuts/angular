import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
	
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  
  getPaginatedTutorials(page: number, itemsPerPage: number): Observable<any> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', itemsPerPage.toString());

    return this.http.get<any>(this.baseUrl + 'tutorials', { params });
  }
  
}
