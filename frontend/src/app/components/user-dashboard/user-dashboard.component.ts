import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AllToursComponent } from '../all-tours/all-tours.component';
import { UserdashboardService } from '../../services/userdashboard.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [ NavbarComponent, AllToursComponent, CommonModule,],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})

export class UserDashboardComponent implements OnInit {
  bookingsCount: number = 0;
  reviewsCount: number = 0;
  toursAvailable: number = 0;
  tours: any[] = [];

  constructor(private userService: UserdashboardService) {}

  ngOnInit(): void {
    this.fetchDashboardStats();
    this.fetchTours();
  }

  private fetchDashboardStats() {
    this.userService.getDashboardStats().subscribe(
      (stats: any) => {
        this.bookingsCount = stats.bookingsCount;
        this.reviewsCount = stats.reviewsCount;
        this.toursAvailable = stats.toursAvailable;
      },
      error => {
        console.error('Error fetching dashboard statistics:', error);
        // Handle error scenario
      }
    );
  }

  private fetchTours() {
    this.userService.getTours().subscribe(
      (data: any[]) => {
        this.tours = data;
      },
      error => {
        console.error('Error fetching tours:', error);
        // Handle error scenario
      }
    );
  }
}