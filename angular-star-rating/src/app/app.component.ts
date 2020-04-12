import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular Star Rating';
  
	arr: any[] = [];
	index:number = -1;
  
	constructor() {
		this.arr = [1, 2, 3, 4, 5];
	}
  
	onClickItem(index) {
		//console.log(index);
		this.index = index;
	}
}
