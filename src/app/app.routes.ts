import { Routes } from '@angular/router';
import { LoginAuthGuard } from './RouteGuards/login-auth-guard';

export const routes: Routes = [
    {
        path: 'login/callback',
        loadComponent: () => import('./components/login/callback/callback').then(m => m.LoginCallbackComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login').then(m => m.LoginComponent)
    },
    {
        path: '',
        canActivate: [LoginAuthGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./components/dashboard/dashboard').then(m => m.DashboardComponent),
            },
        ]
    }
];
