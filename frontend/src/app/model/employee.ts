export interface Employee {
    id?: number; // optional for creation
    employeeCode?: string;

    // Personal information
    firstName: string;
    lastName: string;
    birthDate: string; // string for dates in Angular
    address?: string;
    phone?: string;
    email: string;
    imageUrl?: string;

    // Employment information
    jobTitle: string;
    department: string;
    contractType: string;
    dateOfHire: string;
    salary: number;
    status: string;

    // Hierarchy and roles
    managerId?: number;
    roles: string[];

    // Notes
    notes?: string;
}
