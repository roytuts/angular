import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    SESSION_KEY: string = 'auth_user'

	username: string = '';
	password: string = '';

	constructor(private http: HttpClient) {}

	authenticate(username: string, password: string) {
		return this.http.get(`http://localhost:8080/auth`, { 
			headers: { authorization: this.createBasicAuthToken(username, password) }}).pipe(map((res) => {
				this.username = username;
				this.password = password;				
				this.registerInSession(username, password);
		}));
	}

	createBasicAuthToken(username: string, password: string) {
		return 'Basic ' + window.btoa(username + ":" + password)
	}
	
	registerInSession(username: string, password: string) {
		sessionStorage.setItem(this.SESSION_KEY, username)
	}

	logout() {
		sessionStorage.removeItem(this.SESSION_KEY);
		this.username = '';
		this.password = '';
	}

	isUserLoggedin() {
		let user = sessionStorage.getItem(this.SESSION_KEY)
		if (user === null) return false
		return true
	}

	getLoggedinUser() {
		let user = sessionStorage.getItem(this.SESSION_KEY)
		if (user === null) return ''
		return user
	}

}
