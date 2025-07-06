import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@employee-tax/table';

@Component({
  selector: 'lib-employee-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    BannerComponent,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeList {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Employee>(employees);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  grossAnnualSalary: number;
}

export const employees: Employee[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', grossAnnualSalary: 40000 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', grossAnnualSalary: 50000 },
  { id: 3, firstName: 'Alice', lastName: 'Smith', grossAnnualSalary: 55000 },
  { id: 4, firstName: 'Bob', lastName: 'Johnson', grossAnnualSalary: 47000 },
  { id: 5, firstName: 'Charlie', lastName: 'Brown', grossAnnualSalary: 62000 },
  { id: 6, firstName: 'David', lastName: 'Wilson', grossAnnualSalary: 53000 },
  { id: 7, firstName: 'Eve', lastName: 'Taylor', grossAnnualSalary: 45000 },
  { id: 8, firstName: 'Frank', lastName: 'Anderson', grossAnnualSalary: 58000 },
  { id: 9, firstName: 'Grace', lastName: 'Thomas', grossAnnualSalary: 61000 },
  { id: 10, firstName: 'Hank', lastName: 'White', grossAnnualSalary: 49000 },
  { id: 11, firstName: 'Ivy', lastName: 'Harris', grossAnnualSalary: 52000 },
  { id: 12, firstName: 'Jack', lastName: 'Martin', grossAnnualSalary: 46000 },
  { id: 13, firstName: 'Karen', lastName: 'Lee', grossAnnualSalary: 57000 },
  { id: 14, firstName: 'Leo', lastName: 'Walker', grossAnnualSalary: 60000 },
  { id: 15, firstName: 'Mia', lastName: 'Hall', grossAnnualSalary: 44000 },
  { id: 16, firstName: 'Noah', lastName: 'Allen', grossAnnualSalary: 51000 },
  { id: 17, firstName: 'Olivia', lastName: 'Young', grossAnnualSalary: 63000 },
  { id: 18, firstName: 'Paul', lastName: 'King', grossAnnualSalary: 48000 },
  { id: 19, firstName: 'Quinn', lastName: 'Wright', grossAnnualSalary: 54000 },
  { id: 20, firstName: 'Rachel', lastName: 'Scott', grossAnnualSalary: 59000 },
];
