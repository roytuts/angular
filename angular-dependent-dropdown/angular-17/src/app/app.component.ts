import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	constructor(private title: Title) {}

	ngOnInit() {
		this.title.setTitle('Angular Cascading or Dependent Dropdown');
	}
	
	selectedCountry: String = "--Choose Country--";
  
	Countries: Array<any> = [
		{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
		{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
		{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
		{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
	];
  
	states: Array<any> = [];

	cities: Array<any> = [];
	
	changeCountry(country: any) {
		this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states;
	}

	changeState(state: any) {
		this.cities = this.Countries.find((cntry: any) => cntry.name == this.selectedCountry).states.find((stat: any) => stat.name == state.target.value).cities;
	}
  
}
