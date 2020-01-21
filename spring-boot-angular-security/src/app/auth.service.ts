import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	SESSION_KEY = 'auth_user'

	username: String;
	password: String;

	constructor(private http: HttpClient) {}

	authenticate(username: String, password: String) {
		return this.http.get(`http://localhost:8080/auth`, { 
			headers: { authorization: this.createBasicAuthToken(username, password) }}).pipe(map((res) => {
				this.username = username;
				this.password = password;				
				this.registerInSession(username, password);
		}));
	}

	createBasicAuthToken(username: String, password: String) {
		return 'Basic ' + window.btoa(username + ":" + password)
	}
	
	registerInSession(username, password) {
		sessionStorage.setItem(this.SESSION_KEY, username)
	}

	logout() {
		sessionStorage.removeItem(this.SESSION_KEY);
		this.username = null;
		this.password = null;
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
