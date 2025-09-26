import { Component, signal, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
//import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';

import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular Reactive Forms');
  
  registrationForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email], [this.emailExistsValidator()]],
      address: ['', [Validators.required, Validators.minLength(30)]],
	  country: ['', [Validators.required, Validators.minLength(2)]],
	  pin: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^\d{6}$/)]]
    });
  }
  
  emailExistsValidator() {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
	  const email = control.value;
	  if (!email) {
        return of(null); // No value, no validation needed
      }
	  
	  return this.emailService.checkEmailExists(control.value).pipe(
        map(exists => (exists ? { emailTaken: true } : null)),
        catchError(() => of(null)) // Handle API errors gracefully
      );
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }
  
}
