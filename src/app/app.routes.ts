import { Routes } from '@angular/router';
import { LoginAuthGuard } from './RouteGuards/login-auth-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [LoginAuthGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login').then(m => m.Login)
    }
];
