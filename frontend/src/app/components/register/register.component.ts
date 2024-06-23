import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() toggle = new EventEmitter<boolean>();

  registerForm = {
    email: '',
    password: ''
  };

  constructor() {}

  register() {
    // Implement registration logic here, e.g., call a service to register the user
    // For simplicity, let's assume a success scenario where registration is successful
    // You would typically call a service method here to handle registration
    // Example:
    // this.authService.register(this.registerForm).subscribe(
    //   (response) => {
    //     // Registration successful, you might want to navigate somewhere or show a success message
    //   },
    //   (error) => {
    //     // Handle registration error
    //   }
    // );
    console.log('Registering user with email:', this.registerForm.email);
    console.log('Password:', this.registerForm.password);
    // After successful registration, emit an event to toggle back to login form
    this.toggle.emit(true); // Emitting to parent component (landing component)
  }

  toggleForm() {
    this.toggle.emit(true); // Emitting to parent component (landing component)
  }
}

