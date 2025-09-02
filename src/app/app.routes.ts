import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./components/register/register').then(m => m.Register) },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard) }
];
