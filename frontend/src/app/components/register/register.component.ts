import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  constructor(private router: Router) {}

  register() {
    // Here you can implement your registration logic, e.g., sending data to backend API
    console.log('Registering user:', this.registerForm);

    // After successful registration, navigate to another route (e.g., home)
    this.router.navigate(['/home']);
  }
}
