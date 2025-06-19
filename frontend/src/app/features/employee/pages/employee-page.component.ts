import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../core/model/employee.model';
import { EmployeeService } from '../../../core/services/employee-service';
import { EmployeeCardComponent } from '../components/employee-card/employee-card.component';
import { EmployeeModalComponent } from '../components/employee-modal/employee-modal.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employee-page',
    standalone: true,
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss'],
    imports: [
        CommonModule,
        FormsModule,
        EmployeeCardComponent,
        EmployeeModalComponent,
        BreadcrumbComponent
    ]
})
export class EmployeePageComponent implements OnInit {

    // Full list of employees
    employees: Employee[] = [];

    // Filtered list for search
    filteredEmployees: Employee[] = [];

    // Search term for filtering
    searchTerm: string = '';

    // Employee object used when opening modal
    selectedEmployee: Employee = this.getEmptyEmployee();

    // Flag to control if modal is opened in edit mode or add mode
    isEditMode: boolean = false;

    constructor(
        private employeeService: EmployeeService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.loadEmployees();
    }

    private loadEmployees(): void {
        this.employeeService.getEmployees().subscribe({
            next: (response: Employee[]) => {
                this.employees = response;
                this.filteredEmployees = response;
            },
            error: (error) => {
                console.error('Error fetching employees:', error);
            }
        });
    }

    onSearch(): void {
        const term = this.searchTerm.toLowerCase();
        this.filteredEmployees = this.employees.filter(emp =>
            emp.firstName.toLowerCase().includes(term) ||
            emp.lastName.toLowerCase().includes(term) ||
            emp.jobTitle.toLowerCase().includes(term) ||
            emp.department.toLowerCase().includes(term)
        );
    }

    onAddNewEmployee(): void {
        this.selectedEmployee = this.getEmptyEmployee();
        this.isEditMode = false;
    }

    onEmployeeAdded(): void {
        this.loadEmployees();
    }

    onEditEmployee(employee: Employee): void {
        this.selectedEmployee = { ...employee };
        this.isEditMode = true;
    }

    onDeleteEmployee(employee: Employee): void {
        if (confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
            this.employeeService.deleteEmployee(employee.id!).subscribe({
                next: () => {
                    this.toastr.success('Employee deleted successfully!');
                    this.loadEmployees();
                },
                error: (error) => {
                    console.error('Error deleting employee:', error);
                    this.toastr.error('Failed to delete employee.');
                }
            });
        }
    }

    private getEmptyEmployee(): Employee {
        return {
            firstName: '',
            lastName: '',
            birthDate: '',
            address: '',
            phone: '',
            email: '',
            imageUrl: '',
            jobTitle: '',
            department: '',
            contractType: '',
            dateOfHire: '',
            salary: 0,
            status: 'Active',
            roles: []
        };
    }
}
