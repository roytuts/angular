import { Component } from '@angular/core';
import { FileService } from './file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	selectedFiles: FileList;
	currentFile: File;

    constructor(private fileService: FileService) {}
	
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadFile(this.currentFile).subscribe(response => {
		this.selectedFiles.value = '';
     if (response instanceof HttpResponse) {
		 this.msg = response.body;
        console.log(response.body);
      }	  
    });    
  }
}