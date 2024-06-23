import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  currentTab: string = 'manage-tours'; // Default tab
  numberOfUsers: number = 0;
  numberOfTours: number = 0;
  numberOfBookings: number = 0;
  tours: any[] = [];
  users: any[] = [];
  currentUser: any = {};
  showCreateForm: boolean = false; // Show or hide create tour form
  newTour: any = {}; // Model for new tour

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
      this.fetchStats();
      this.fetchTours();
      this.fetchUsers();
  }

  fetchStats() {
      this.http.get<any>('http://your-backend-api/stats').subscribe(
          data => {
              this.numberOfUsers = data.numberOfUsers;
              this.numberOfTours = data.numberOfTours;
              this.numberOfBookings = data.numberOfBookings;
          },
          error => {
              console.log('Error fetching stats: ', error);
          }
      );
  }

  fetchTours() {
      this.http.get<any[]>('http://your-backend-api/tours').subscribe(
          data => {
              this.tours = data;
          },
          error => {
              console.log('Error fetching tours: ', error);
          }
      );
  }

  fetchUsers() {
      this.http.get<any[]>('http://localhost:5203/api/alltours').subscribe(
          data => {
              this.users = data;
          },
          error => {
              console.log('Error fetching users: ', error);
          }
      );
  }

  softDeleteTour(tour: any) {
      // Implement soft delete logic here
  }

  editTour(tour: any) {
      // Implement edit tour logic here
  }

  deleteUser(user: any) {
      // Implement delete user logic here
  }

  updateProfile() {
      // Implement update profile logic here
  }

  toggleCreateForm() {
      this.showCreateForm = !this.showCreateForm;
  }

  createTour() {
      this.http.post('http://localhost:5203/api/tours', this.newTour).subscribe(
          data => {
              this.showCreateForm = false;
              this.fetchTours();
          },
          error => {
              console.log('Error creating tour: ', error);
          }
      );
  }
}