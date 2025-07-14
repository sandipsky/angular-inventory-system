import { Routes } from '@angular/router';

export const reportsRoutes: Routes = [
    {
        path: '',
        component: Report,
        children: [
            {
                path: '',
                component: Report
            },
        ]
    }
];
