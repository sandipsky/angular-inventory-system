import { Routes } from '@angular/router';
import { Inventory } from './inventory';

export const inventoryRoutes: Routes = [
    {
        path: '',
        component: Inventory,
        children: [
            {
                path: '',
                redirectTo: 'purchase',
                pathMatch: 'full'
            },
            {
                path: 'purchase',
                loadComponent: () => import('./purchase/purchase').then(m => m.Purchase)
            },
            {
                path: 'purchase-return',
                loadComponent: () => import('./purchase-return/purchase-return').then(m => m.PurchaseReturn)
            }
        ]
    }
];
