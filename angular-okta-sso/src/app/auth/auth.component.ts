import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { environment } from './../../environments/environment';

@Component({
selector: 'app-auth',
templateUrl: './auth.component.html',
styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	constructor(
	private activatedRoute: ActivatedRoute,
	private http: HttpClient ) { }

	ngOnInit(): void {
			this.activatedRoute.queryParams.subscribe(params => {
		if (params['code']) {
			this.getAccessTokenAndUserInfo(params['code'], params['state']);
		}
	});
	}

	getAccessTokenAndUserInfo(code: string, state: string) {
	if (state !== window.sessionStorage.getItem('state') as string) {
		console.log('Invalid state');
		return;
	}
	const payload = new HttpParams()
		.append('grant_type', 'authorization_code')
		.append('code', code)
		.append('code_verifier', window.sessionStorage.getItem('codeVerifier') as string)
		.append('redirect_uri', environment.oauthCallbackUrl)
		.append('client_id', environment.oauthClientId);
		 this.http.post(environment.oauthTokenUrl, payload, {
		   headers: {
			  'Content-Type': 'application/x-www-form-urlencoded'
		   }
		 }).subscribe((response: any) => {
		   console.log(response);
		  
		   let token = response.token_type + ' ' + response.access_token;                            
		   this.http.post('https://dev.oktapreview.com/oauth2/v1/userinfo', payload, {
			  headers: {
							'Authorization': token
			  }
		   }).subscribe(resp => {
			  console.log(resp);
		   });
		 });
	}
}
