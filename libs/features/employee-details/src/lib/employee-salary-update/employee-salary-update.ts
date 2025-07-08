import {
  Component,
  inject,
  signal,
  effect,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-employee-salary-update',
  templateUrl: './employee-salary-update.html',
  styleUrl: './employee-salary-update.scss',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class EmployeeSalaryUpdate {
  salary = input.required<number>();
  salaryControl = new FormControl<number>(0, [
    Validators.required,
    Validators.min(1),
  ]);

  readonly salaryUpdated = output<number>();

  constructor() {
    effect(() => {
      const salary = this.salary();
      if (salary) {
        this.salaryControl.setValue(salary, {
          emitEvent: false,
        });
      }
    });
  }

  updateSalary(): void {
    const salary = this.salaryControl.value;
    if (salary && salary !== this.salary()) {
      this.salaryUpdated.emit(salary);
    }
  }
}
