import { Component } from '@angular/core';
import { FileService } from './file.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

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
    this.fileService.uploadFile(this.currentFile).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }
}