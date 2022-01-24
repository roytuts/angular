import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const TOKEN_EXPIRY_KEY = 'AuthTokenExpiry';
const AUTH_INFO_KEY = 'AuthInfo';
 
@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  constructor() { }
 
  public saveUserDetails(token: any, user: any) {
	window.sessionStorage.setItem(TOKEN_KEY, token.accessToken);
	window.sessionStorage.setItem(TOKEN_EXPIRY_KEY, token.expiresAt);
   
	let userInfo = {username: '', email: '', roles: ''};
	userInfo.username = user['name'];
	userInfo.email = user['email'];
	userInfo.roles = user['groups'];
   
	window.sessionStorage.setItem(AUTH_INFO_KEY, JSON.stringify(userInfo));
  }
 
  public getToken(): string {
	return window.sessionStorage.getItem(TOKEN_KEY) || '';
  }
 
  public getSessionUserName(): string {
	const userInfo = JSON.parse(window.sessionStorage.getItem(AUTH_INFO_KEY) || '""');
   
	if(userInfo) {
	   return userInfo.username;
	}
   
	return '';
  }
 
  public getSessionAuthInfo(): string {
	return window.sessionStorage.getItem(AUTH_INFO_KEY) || '';
  }
 
  public getSessionAuthRoles(): string[] {  
	const userInfo = JSON.parse(window.sessionStorage.getItem(AUTH_INFO_KEY) || '""');
   
	return userInfo.roles || [];
  }
 
  public isSessionExpired(): boolean {
	let time: any = window.sessionStorage.getItem(TOKEN_EXPIRY_KEY);
   
	if(time) {
	   return Date.now() > time;
	}
   
	return false;
  }
 
  public isRoleExist(roles: string[]): boolean {
	let isRoleExist: boolean = false;
	roles.forEach(r => {
	   if(this.getSessionAuthRoles().includes(r)) {
		 isRoleExist = true;
	   }
	});
   
	return isRoleExist;
  }
 
  public signOut() {
	window.sessionStorage.removeItem(TOKEN_KEY);
	window.sessionStorage.removeItem(AUTH_INFO_KEY);
	window.sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
	window.sessionStorage.clear();
  }
 
}

