import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Inventory } from './features/inventory/inventory';
import { Billing } from './features/billing/billing';
import { Accounting } from './features/accounting/accounting';
import { AccountMaster } from './features/accounting/account-master/account-master';
import { Payment } from './features/accounting/payment/payment';

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
                component: Inventory
            },
            {
                path: 'billing',
                component: Billing
            },
            {
                path: 'accounting',
                component: Accounting,
                children: [
                    {
                        path: '',
                        redirectTo: 'account-master',
                        pathMatch: 'full'
                    },
                    {
                        path: 'account-master',
                        component: AccountMaster
                    },
                    {
                        path: 'payment',
                        component: Payment
                    }
                ]
            },
            {
                path: 'accounting',
                component: Accounting
            },
        ]
    }
];
