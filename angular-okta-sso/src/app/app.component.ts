import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import * as CryptoJS from 'crypto-js';
 
import { environment } from './../environments/environment';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-okta-sso';
 
  constructor() {}
 
  ngOnInit() {
	  const state = this.randomStr(40);
	  const codeVerifier = this.randomStr(128);
	 
	  window.sessionStorage.setItem('state', state);
	  window.sessionStorage.setItem('codeVerifier', codeVerifier);
	 
	  const codeVerifierHash = CryptoJS.SHA256(codeVerifier).toString(CryptoJS.enc.Base64);
	 
	  const codeChallenge = codeVerifierHash
		 .replace(/=/g, '')
		 .replace(/\+/g, '-')
		 .replace(/\//g, '_');

	  const params = [
		 'response_type=code',
		 'state=' + state,
		 'client_id=' + environment.oauthClientId,
		 'scope=openid',
		 'code_challenge=' + codeChallenge,
		 'code_challenge_method=S256',
		 'redirect_uri=' + encodeURIComponent(environment.oauthCallbackUrl),
	  ];
	 
	  let url = environment.oauthLoginUrl + '?' + params.join('&');
	 
	  //alert(url);
	 
	  window.location.href = url;
  }
 
  private randomStr(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
             
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
             
    return result;
  }
}