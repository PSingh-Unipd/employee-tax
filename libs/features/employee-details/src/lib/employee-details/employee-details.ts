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
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeDetailsStore } from '../store/employee-details.store';

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
    ReactiveFormsModule,
  ],
  providers: [EmployeeDetailsStore],
})
export class EmployeeDetails {
  private route = inject(ActivatedRoute);
  public store = inject(EmployeeDetailsStore);
  salaryControl = new FormControl<number>(0, [
    Validators.required,
    Validators.min(1),
  ]);

  employee = signal<IEmployeeDetails | null>(null);

  constructor() {
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.store.loadById(id);
      }
    });

    effect(() => {
      const employee = this.store.employee();
      if (employee) {
        this.salaryControl.setValue(employee.grossAnnualSalary, {
          emitEvent: false,
        });
      }
    });
  }

  updateSalary() {
    const employee = this.store.employee();
    const salary = this.salaryControl.value;
    if (employee && salary && salary !== employee.grossAnnualSalary) {
      this.store.updateSalary(employee.id, salary);
    }
  }
}
