import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../core/model/employee.model';
import { EmployeeService } from '../../../../core/services/employee-service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employee-modal',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './employee-modal.component.html',
    styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent implements OnChanges {

    // Input employee object to bind data from parent component
    @Input() employee: Employee = this.getEmptyEmployee();

    // Input list of all employees for manager dropdown
    @Input() allEmployees: Employee[] = [];

    // Input to determine if we are in edit mode
    @Input() isEditMode: boolean = false;

    // Output event to notify parent when a new employee is successfully added or updated
    @Output() employeeAdded = new EventEmitter<void>();

    // Local variables to handle roles and validation
    public rolesString: string = '';
    public rolesError: boolean = false;
    public isSubmitting: boolean = false;

    constructor(
        private employeeService: EmployeeService,
        private toastr: ToastrService
    ) { }

    // Handle changes on @Input employee object
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['employee']) {
            this.rolesString = (this.employee.roles || []).join(', ');
        }
    }

    // Handle form submission (both create and update logic)
    public onSubmit() {
        // Convert roles string to array
        this.employee.roles = this.rolesString
            .split(',')
            .map(role => role.trim())
            .filter(role => role);

        if (this.employee.roles.length === 0) {
            this.rolesError = true;
            return;
        }

        this.rolesError = false;
        this.isSubmitting = true;

        if (this.isEditMode && this.employee.id) {
            // PUT (update)
            this.employeeService.updateEmployee(this.employee).subscribe({
                next: (response) => {
                    console.log('Employee updated successfully:', response);
                    this.toastr.success('Employee updated successfully!');
                    this.employeeAdded.emit();
                    this.closeModal();
                    this.isSubmitting = false;
                },
                error: (error) => {
                    console.error('Error updating employee:', error);
                    this.toastr.error('Failed to update employee.');
                    this.isSubmitting = false;
                }
            });
        } else {
            // POST (create)
            this.employeeService.addEmployee(this.employee).subscribe({
                next: (response) => {
                    console.log('Employee added successfully:', response);
                    this.toastr.success('Employee created successfully!');
                    this.employeeAdded.emit();
                    this.closeModal();
                    this.isSubmitting = false;
                },
                error: (error) => {
                    console.error('Error adding employee:', error);
                    this.toastr.error('Failed to add employee.');
                    this.isSubmitting = false;
                }
            });
        }
    }

    // Close the modal programmatically after successful submission
    private closeModal(): void {
        const modalElement = document.getElementById('employeeModal');
        if (modalElement) {
            modalElement.classList.remove('show');
            modalElement.setAttribute('aria-hidden', 'true');
            modalElement.removeAttribute('aria-modal');
            modalElement.style.display = 'none';

            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.remove();
            }
        }
    }

    // Create an empty employee template object for initialization
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
