import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { TokenService } from './../token.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private authService: AuthService, private tokenService: TokenService) { }
 
  ngOnInit(): void {
  }
 
  logout() {
	this.tokenService.signOut();
	this.authService.signout();
  }
 
}

