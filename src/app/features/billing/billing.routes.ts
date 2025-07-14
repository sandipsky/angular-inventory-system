import { Routes } from '@angular/router';
import { Billing } from './billing';

export const billingRoutes: Routes = [
    {
        path: '',
        component: Billing,
        children: [
            {
                path: '',
                redirectTo: 'sales',
                pathMatch: 'full'
            },
            {
                path: 'sales',
                loadComponent: () => import('./sales/sales').then(m => m.Sales)
            },
            {
                path: 'sales-return',
                loadComponent: () => import('./sales-return/sales-return').then(m => m.SalesReturn)
            }
        ]
    }
];
