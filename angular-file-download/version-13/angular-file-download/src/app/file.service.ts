import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class FileService {
 
	constructor(private http: HttpClient) {}

	downloadFile(): any {                   
		return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'});
	}
  
}
