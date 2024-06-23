import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {

  private userDataUrl = 'api/u'; // Endpoint to get user data
  private dashboardStatsUrl = 'api/dashboardStats'; // Endpoint to get dashboard statistics
  private toursUrl = 'api/tours'; // Endpoint to get tours
  private doneTripsUrl = 'api/doneTrips'; // Endpoint to get done trips

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get<any>(this.userDataUrl);
  }

  getDashboardStats(): Observable<any> {
    return this.http.get<any>(this.dashboardStatsUrl);
  }

  getTours(): Observable<any> {
    return this.http.get<any>(this.toursUrl);
  }

  getDoneTrips(): Observable<any> {
    return this.http.get<any>(this.doneTripsUrl);
  }
}