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
import { EmployeeService } from '@employee-tax/data-access';
import { IEmployeeDetails } from '@employee-tax/data-access';
import { firstValueFrom } from 'rxjs';

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
  ],
})
export class EmployeeDetails {
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  employee = signal<IEmployeeDetails | null>(null);

  constructor() {
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.loadEmployee(id);
      }
    });
  }

  private async loadEmployee(id: string) {
    const data = await firstValueFrom(this.employeeService.getById(id));
    this.employee.set(data);
  }
}
