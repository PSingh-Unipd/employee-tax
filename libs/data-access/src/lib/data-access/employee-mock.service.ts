import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmployee, IEmployeeDetails } from '../models/employee.interface';
import { IEmployeeService } from '../models/employee-service.interface';

export const MOCK_EMPLOYEES: IEmployee[] = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    grossAnnualSalary: 50000,
  },
  { id: '2', firstName: 'Bob', lastName: 'Smith', grossAnnualSalary: 60000 },
  {
    id: '3',
    firstName: 'Charlie',
    lastName: 'Brown',
    grossAnnualSalary: 45000,
  },
  { id: '4', firstName: 'Diana', lastName: 'Reed', grossAnnualSalary: 70000 },
  { id: '5', firstName: 'Ethan', lastName: 'Cole', grossAnnualSalary: 55000 },
  { id: '6', firstName: 'Fiona', lastName: 'Black', grossAnnualSalary: 80000 },
  { id: '7', firstName: 'George', lastName: 'White', grossAnnualSalary: 48000 },
  { id: '8', firstName: 'Hannah', lastName: 'Green', grossAnnualSalary: 75000 },
  { id: '9', firstName: 'Ian', lastName: 'Blue', grossAnnualSalary: 52000 },
  { id: '10', firstName: 'Julia', lastName: 'Gray', grossAnnualSalary: 63000 },
  { id: '11', firstName: 'Kevin', lastName: 'Brown', grossAnnualSalary: 47000 },
  {
    id: '12',
    firstName: 'Laura',
    lastName: 'Wright',
    grossAnnualSalary: 67000,
  },
  {
    id: '13',
    firstName: 'Michael',
    lastName: 'King',
    grossAnnualSalary: 53000,
  },
  { id: '14', firstName: 'Nina', lastName: 'Young', grossAnnualSalary: 49000 },
  { id: '15', firstName: 'Oscar', lastName: 'Hall', grossAnnualSalary: 58000 },
  { id: '16', firstName: 'Paula', lastName: 'Scott', grossAnnualSalary: 76000 },
  {
    id: '17',
    firstName: 'Quentin',
    lastName: 'Moore',
    grossAnnualSalary: 62000,
  },
  {
    id: '18',
    firstName: 'Rachel',
    lastName: 'Clark',
    grossAnnualSalary: 54000,
  },
  {
    id: '19',
    firstName: 'Steven',
    lastName: 'Lewis',
    grossAnnualSalary: 47000,
  },
  { id: '20', firstName: 'Tina', lastName: 'Walker', grossAnnualSalary: 61000 },
];

@Injectable()
export class EmployeeMockService implements IEmployeeService {
  private employees = [...MOCK_EMPLOYEES];

  getAll(): Observable<IEmployee[]> {
    return of(this.employees);
  }

  getById(id: string): Observable<IEmployeeDetails> {
    const employee = this.employees.find((emp) => emp.id === id);
    if (!employee) throw new Error(`Employee with id ${id} not found`);
    return of(this.calculateDerivedFields(employee));
  }

  updateSalary(id: string, newSalary: number): Observable<IEmployeeDetails> {
    throw Error(
      'Updating employee salaries is not supported in this mock service'
    );
  }

  private calculateDerivedFields(emp: IEmployee): IEmployeeDetails {
    const grossMonthlySalary = emp.grossAnnualSalary / 12;
    const taxRate = 0.25; // Assume 25% flat tax for mock purposes
    const annualTaxPaid = emp.grossAnnualSalary * taxRate;
    const monthlyTaxPaid = annualTaxPaid / 12;
    const netAnnualSalary = emp.grossAnnualSalary - annualTaxPaid;
    const netMonthlySalary = netAnnualSalary / 12;

    return {
      ...emp,
      grossMonthlySalary,
      annualTaxPaid,
      monthlyTaxPaid,
      netAnnualSalary,
      netMonthlySalary,
    };
  }
}
