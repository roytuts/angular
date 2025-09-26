import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) {}

  checkEmailExists(email: string): Observable<boolean> {
	// Simulate an API call with a delay
	const existingEmails = ['test@roytuts.com', 'testemail@roytuts.com'];
	return of(existingEmails.includes(email.toLowerCase())).pipe(
	  delay(500) // Simulate network latency
	);
  }
}
