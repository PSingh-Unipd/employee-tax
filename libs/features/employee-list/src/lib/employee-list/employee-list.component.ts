import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BannerComponent, TableColumn } from '@employee-tax/table';
import { EmployeeService, IEmployee } from '@employee-tax/data-access';
import { TableComponent } from '@employee-tax/table';

@Component({
  selector: 'lib-employee-list',
  imports: [CommonModule, RouterModule, BannerComponent, TableComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeList {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  columns: TableColumn<IEmployee>[] = [
    { displayHeader: 'First Name', objKey: 'firstName' },
    { displayHeader: 'Last Name', objKey: 'lastName' },
    { displayHeader: 'Gross Salary (£)', objKey: 'grossAnnualSalary' },
    {
      type: 'actions',
      displayHeader: 'View',
      objKey: 'actions',
      actions: [
        {
          label: 'Edit',
          icon: 'read_more',
          action: (employee) => this.router.navigate(['/details', employee.id]),
        },
      ],
    },
  ];

  employees = this.employeeService.getAll();
}
