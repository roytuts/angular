import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { OktaAuth, OktaAuthOptions, TokenManager, IDToken, AccessToken, UserClaims, TokenParams } from '@okta/okta-auth-js';
 
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
 
const config: OktaAuthOptions = {
  issuer: environment.oauthIssuerUrl,
  authorizeUrl: environment.oauthLoginUrl,
  userinfoUrl: environment.oauthUserInfoUrl,
  tokenUrl: environment.oauthTokenUrl,
  clientId: environment.oauthClientId,
  redirectUri: environment.oauthCallbackUrl,
  responseMode: 'fragment',
  scopes: ['openid', 'email', 'profile', 'groups'],
  tokenManager: {
    storage: 'sessionStorage'
  },
  devMode: true
};
 
const authClient: OktaAuth = new OktaAuth(config);
const tokenManager: TokenManager = authClient.tokenManager;
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private router: Router, private tokenService: TokenService) { }
 
  async signout() {
	await authClient.signOut({
	   postLogoutRedirectUri: environment.oauthPostLogoutUrl
	});
  }
 
  async signin() {
	if(authClient.isLoginRedirect()) {
	   try {
		 await authClient.handleLoginRedirect();
	   } catch(e) {
		 console.log(e);
	   }
	} else if(!await authClient.isAuthenticated()) {
	   authClient.signInWithRedirect();
	} else {
	   const accessToken: AccessToken = await tokenManager.get('accessToken') as AccessToken;
	  
	   const idToken: IDToken = await tokenManager.get('idToken') as IDToken;
	  
	   let userInfo: UserClaims = await authClient.getUser();
	  
	   if(!userInfo) {
		 const tokenParams: TokenParams = {
			scopes: ['openid', 'email', 'profile', 'groups']
		 }
		
		 authClient.token.getWithRedirect(tokenParams);
	   }
	  
	   this.tokenService.saveUserDetails(accessToken, userInfo);
	  
	   this.router.navigate(['']);
	}
  }
 
}

