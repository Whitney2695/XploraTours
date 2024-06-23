import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: '' , component: LandingComponent},
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminDashboardComponent },
    { path: '**', redirectTo: '' }
];
