import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { TokenService } from './../token.service';
 
@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
 
  constructor(private authService: AuthService, private tokenService: TokenService) { }
 
  ngOnInit(): void {
  }
 
  logout() {
	this.tokenService.signOut();
	this.authService.signout();
  }
 
}

