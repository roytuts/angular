import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(private http: Http) {}

  downloadFile(): Observable<HttpResponse<Blob>>{		
		return this.http.get('http://localhost:8080/employees/download', { responseType: ResponseContentType.Blob });
   }
   
}