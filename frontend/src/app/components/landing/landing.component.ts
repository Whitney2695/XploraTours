import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LoginComponent, CommonModule,FormsModule, ReactiveFormsModule, RegisterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  showAuthForm: boolean = false;
  isLogin: boolean = true;

  showLogin() {
    this.showAuthForm = true;
    this.isLogin = true;
  }

  toggleForm(event: boolean) {
    this.isLogin = event;
  }
}
