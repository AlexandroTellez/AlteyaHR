import { Component, Input } from '@angular/core';
import { Employee } from '../../../core/model/employee.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-employee-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {

    @Input() employees: Employee[] = [];

    // Method for assigning badge colour according to status
    public getBadgeClass(status: string): string {
        switch (status) {
            case 'Active': return 'badge-success';
            case 'Banned': return 'badge-danger';
            case 'Pending': return 'badge-warning';
            case 'On Leave':
            case 'Inactive':
                return 'badge-secondary';
            default:
                return 'badge-secondary';
        }
    }
}


