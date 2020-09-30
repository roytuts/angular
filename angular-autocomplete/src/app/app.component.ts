import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	results: any[] = [];
	searchResults: any[] = [];
	
	constructor(private searchService: SearchService) { }
	
	ngOnInit() {
		this.getSearchResults();
	}
	
	getSearchResults(): void {
		this.searchService.getResultList().subscribe(sr => {Object.assign(this.searchResults, sr);});
	}
	
	searchOnKeyUp(event) {
		let input = event.target.value;
		//console.log('event.target.value: ' + input);
		//console.log('this.searchResults: ' + this.searchResults);
		if (input.length > 1) {
			this.results = this.searchFromArray(this.searchResults, input);
		}
	}  

	searchFromArray(arr, regex) {
		let matches = [], i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].match(regex)) {
				matches.push(arr[i]);
			}
		}
		//console.log('matches: ' + matches);
		return matches;
	};

}
