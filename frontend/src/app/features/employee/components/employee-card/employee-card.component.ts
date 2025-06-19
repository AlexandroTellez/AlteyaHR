import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../../core/model/employee.model';

@Component({
    selector: 'app-employee-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './employee-card.component.html',
    styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

    // Input list of employees to render
    @Input() employees: Employee[] = [];

    // Output event to emit selected employee when Edit is clicked
    @Output() editEmployee = new EventEmitter<Employee>();

    // Output event to emit selected employee when Delete is clicked
    @Output() deleteEmployee = new EventEmitter<Employee>();

    // Emit selected employee to parent for editing
    public onEditEmployee(employee: Employee): void {
        this.editEmployee.emit(employee);
    }

    // Emit selected employee to parent for deletion
    public onDeleteEmployee(employee: Employee): void {
        this.deleteEmployee.emit(employee);
    }

    // Return badge class based on employee status (Bootstrap 5 classes)
    public getBadgeClass(status: string): string {
        const badgeClasses: Record<string, string> = {
            'Active': 'bg-success',
            'Banned': 'bg-danger',
            'Pending': 'bg-warning',
            'On Leave': 'bg-secondary',
            'Inactive': 'bg-secondary'
        };
        return badgeClasses[status] ?? 'bg-secondary';
    }
}
