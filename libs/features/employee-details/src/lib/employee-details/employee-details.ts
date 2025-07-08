import { Component, inject, signal, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { BannerComponent } from '@employee-tax/table';
import { IEmployeeDetails } from '@employee-tax/data-access';
import { EmployeeDetailsStore } from '../store/employee-details.store';
import { EmployeeSalaryUpdate } from '../employee-salary-update/employee-salary-update';

@Component({
  selector: 'lib-employee-details',
  standalone: true,
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    BannerComponent,
    EmployeeSalaryUpdate,
  ],
  providers: [EmployeeDetailsStore],
})
export class EmployeeDetails {
  private route = inject(ActivatedRoute);
  public store = inject(EmployeeDetailsStore);

  employee = signal<IEmployeeDetails | null>(null);

  isEditingSalary = signal(false);

  constructor() {
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.store.loadById(id);
      }
    });
  }

  updateSalary(event: number): void {
    const employee = this.store.employee();
    if (employee && event) {
      this.store.updateSalary(employee.id, event);
    }
  }

  toggleSalaryEdit() {
    this.isEditingSalary.update((prev) => !prev);
  }
}
