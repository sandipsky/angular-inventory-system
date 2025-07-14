import { Routes } from '@angular/router';
import { Masters } from './masters';

export const mastersRoutes: Routes = [
    {
        path: '',
        component: Masters,
        children: [
            {
                path: '',
                redirectTo: 'account-master',
                pathMatch: 'full'
            },
        ]
    }
];
