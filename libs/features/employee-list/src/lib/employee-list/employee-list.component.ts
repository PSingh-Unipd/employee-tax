import { CommonModule } from '@angular/common';
import { Component, inject, signal, effect } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BannerComponent, TableColumn } from '@employee-tax/table';
import { IEmployee } from '@employee-tax/data-access';
import { TableComponent } from '@employee-tax/table';
import { EmployeesListStore } from '../../store/employee-list.store';

@Component({
  selector: 'lib-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent, TableComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
  providers: [EmployeesListStore],
})
export class EmployeeList {
  private store = inject(EmployeesListStore);
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

  employees = this.store.employees;

  constructor() {
    effect(() => {
      this.store.loadAll();
    });
  }
}
