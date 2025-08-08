import { Component, signal, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular Reactive Forms');
  
  registrationForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['Roytuts', Validators.required],
      email: ['roytuts2014@gmail.com', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(30)]],
	  country: ['', [Validators.required, Validators.minLength(2)]],
	  pin: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid: ', form.valid);
    console.log('Name: ', form.value.name);
    console.log('Email: ', form.value.email);
    console.log('Address: ', form.value.address);
	console.log('Country: ', form.value.country);
    console.log('Postal Code: ', form.value.pin);
  } 
  
}
