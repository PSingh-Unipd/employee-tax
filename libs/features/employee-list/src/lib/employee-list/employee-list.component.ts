import { CommonModule } from '@angular/common';
import { Component, inject, effect, computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BannerComponent, TableColumn } from '@employee-tax/table';
import { IEmployee } from '@employee-tax/data-access';
import { TableComponent } from '@employee-tax/table';
import { EmployeesListStore } from '../../store/employee-list.store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BannerComponent,
    TableComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
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

  searchControl = new FormControl('');
  searchvalue = toSignal(this.searchControl.valueChanges);

  employees = computed(() => {
    const employeeList = this.store.employees();
    const searchStr = this.searchvalue();
    if (!searchStr) return employeeList;

    return employeeList.filter(
      (emp) =>
        emp.firstName.toLowerCase().includes(searchStr) ||
        emp.lastName.toLowerCase().includes(searchStr)
    );
  });

  constructor() {
    effect(() => {
      this.store.loadAll();
    });
  }
}
