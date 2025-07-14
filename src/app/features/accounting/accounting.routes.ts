import { Routes } from '@angular/router';
import { Accounting } from './accounting';

export const accountingRoutes: Routes = [
    {
        path: '',
        component: Accounting,
        children: [
            {
                path: '',
                redirectTo: 'account-master',
                pathMatch: 'full'
            },
            {
                path: 'account-master',
                loadComponent: () => import('./account-master/account-master').then(m => m.AccountMaster)
            },
            {
                path: 'payment',
                loadComponent: () => import('./payment/payment').then(m => m.Payment)
            }
        ]
    }
];
