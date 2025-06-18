import { Routes } from '@angular/router';
import { EmployeePageComponent } from './features/employee/pages/employee-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeePageComponent },
];
