import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'inventory',
                loadChildren: () => import('./features/inventory/inventory.routes').then(m => m.inventoryRoutes)
            },
            {
                path: 'billing',
                loadChildren: () => import('./features/billing/billing.routes').then(m => m.billingRoutes)
            },
            {
                path: 'accounting',
                loadChildren: () => import('./features/accounting/accounting.routes').then(m => m.accountingRoutes)
            },
            {
                path: 'users',
                loadComponent: () => import('./features/user/user').then(m => m.User)
            },
            {
                path: 'masters',
                loadChildren: () => import('./features/masters/masters.routes').then(m => m.mastersRoutes)
            },
            {
                path: 'reports',
                loadChildren: () => import('./features/reports/reports.routes').then(m => m.reportsRoutes)
            },
            {
                path: 'settings',
                loadComponent: () => import('./features/settings/settings').then(m => m.Settings)
            }
        ]
    }
];
