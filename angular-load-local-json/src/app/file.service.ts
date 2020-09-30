import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
	constructor(private http: HttpClient) { }

	getResultList() {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        return this.http.get('./assets/data/results.json', { headers });
    }
}
