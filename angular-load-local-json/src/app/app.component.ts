import { Component, OnInit } from '@angular/core';

import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	results: any[] = [];
	
	constructor(private fileService: FileService) { }
	
	ngOnInit() {
		this.fileService.getResultList().subscribe(sr => {Object.assign(this.results, sr);});
	}
	
}
