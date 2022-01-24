import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { TokenService } from './../token.service';
 
@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})
export class UpdatepageComponent implements OnInit {
 
  constructor(private authService: AuthService, private tokenService: TokenService) { }
 
  ngOnInit(): void {
  }
 
  logout() {
	this.tokenService.signOut();
	this.authService.signout();
  }
 
}

