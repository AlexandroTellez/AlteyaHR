import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../core/model/employee.model';
import { EmployeeService } from '../../../core/services/employee-service';
import { EmployeeTableComponent } from '../components/employee-table.component';

@Component({
    selector: 'app-employee-page',
    standalone: true,
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss'],
    imports: [EmployeeTableComponent]
})
export class EmployeePageComponent implements OnInit {

    employees: Employee[] = [];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe(
            (response: Employee[]) => {
                this.employees = response;
            },
            (error) => {
                console.error('Error fetching employees:', error);
            }
        );
    }
}
