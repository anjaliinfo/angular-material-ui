import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app';

import { DashboardComponent } from './app/dashboard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()]
});
