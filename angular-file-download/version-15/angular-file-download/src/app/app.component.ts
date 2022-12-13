import { Component } from '@angular/core';

import { FileService } from './file.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Angular File Download From Server';
  
	constructor(private fileService: FileService) {}
  
	download() {
		this.fileService.downloadFile().subscribe((response: any) => {
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			saveAs(blob, 'employees.json');
		}), (error: any) => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
	}

}
