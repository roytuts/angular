import {Injectable} from '@angular/core';
//import {Http, ResponseContentType} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: HttpClient) {}

//downloadFile(): Observable<any> {
		return this.http.get('http://localhost:8080/employees/download', {responseType: ResponseContentType.Blob});
  downloadFile(): any {
		return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'});
  }
   
}