import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
 
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService) {}
  
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)/*: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree*/ {
   
	  let menu: any[] = [
		{
		 routerLink: '/protected',
		 label: 'Protected Page',
		 isAuthorized: false,
		 accessibleTo: ['BUSINESS', 'BUSINESS_ADMIN']
		},
		{
		 routerLink: '/updatepage',
		 label: 'Update Page',
		 isAuthorized: false,
		 accessibleTo: ['SUPPORT', 'BUSINESS', 'BUSINESS_ADMIN']
		},
	  ];
	 
	  if(this.tokenService.getToken()) {
		 let roles: string[] = [
		   'SUPPORT', 'BUSINESS', 'BUSINESS_ADMIN'
		 ];
		
		 let isRoleExist = false;
		
		 for(let i = 0; i < roles.length; i++) {
		   if(this.tokenService.getSessionAuthRoles().includes(roles[i])) {
			  isRoleExist = true;
			  break;
		   }
		 }
		
		 if(!isRoleExist) {
		   this.router.navigate(['unauthorized']);
		   return false;
		 }
		
		 if(state != undefined) {
		   var routeUrl = state.url;
		  
		   if(routeUrl.indexOf('/', 1) > 0) {
			  routeUrl = routeUrl.slice(0, routeUrl.indexOf('/', 1));
		   }
		  
		   for(var i = 0; i < menu.length; i++) {
			  if(menu[i].routeUrl == routeUrl) {
				let roles = menu[i].accessibleTo;
			   
				let isRoleExist = false;
			   
				for(let i = 0; i < roles.length; i++) {
				  if(this.tokenService.getSessionAuthRoles().includes(roles[i])) {
					 isRoleExist = true;
					 break;
				  }
				}
			   
				if(!isRoleExist) {
				  this.router.navigate(['unauthorized']);
				  return false;
				}
			   
				break;
			  }
		   }
		 }
		
		 return true;
	  }
	 
	  this.authService.signin();
	  return false;      
  }
 
  async canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)/*: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree*/ {
             
    return this.canActivate(childRoute, state);
  }
 
}
