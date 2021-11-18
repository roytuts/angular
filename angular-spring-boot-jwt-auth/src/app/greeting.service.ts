import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class GreetingService {

	private baseUrl = 'http://localhost:8080/greet';

	constructor(private http: HttpClient) { }

	getByUserRole(): Observable<string>{
		//const url = `${this.baseUrl}/user`;
		//return this.http.get<string>(url, {responseType: 'text' as 'json'}).pipe(map((resp) => {
		//	return resp;
		//}));
		return this.http.get<string>(this.baseUrl + '/user', {responseType: 'text' as 'json'}).pipe(map((resp) => {
			return resp;
		}));
	}

	getByAdminRole(): Observable<any>{
		return this.http.get<any>(this.baseUrl + '/admin', {responseType: 'text' as 'json'}).pipe(map((resp) => {
			return resp;
		}));
	}

	getByUserOrAdminRole(): Observable<any>{
		return this.http.get<any>(this.baseUrl + '/userOrAdmin', {responseType: 'text' as 'json'}).pipe(map((resp) => {
			return resp;
		}));
	}

	getByAnonymousRole(): Observable<any>{
		return this.http.get<any>(this.baseUrl + '/anonymous', {responseType: 'text' as 'json'}).pipe(map((resp) => {
			return resp;
		}));
	}

}
