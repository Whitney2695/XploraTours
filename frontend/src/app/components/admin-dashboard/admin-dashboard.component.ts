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
      this.http.get<any[]>('http://your-backend-api/users').subscribe(
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
      // Example: Call API to soft delete tour
  }

  editTour(tour: any) {
      // Navigate to edit tour page or implement inline editing
      // Example: this.router.navigate(['/admin/edit-tour', tour.id]);
  }

  deleteUser(user: any) {
      // Implement delete user logic here
      // Example: Call API to delete user
  }

  updateProfile() {
      // Implement update profile logic here
      // Example: Call API to update current user's profile
      // Refresh currentUser data after update if necessary
  }
}