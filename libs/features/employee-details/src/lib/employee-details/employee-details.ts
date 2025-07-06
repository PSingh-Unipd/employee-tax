import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { BannerComponent } from '@employee-tax/table';

@Component({
  selector: 'lib-employee-details',
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
  employee = {
    firstName: 'John',
    lastName: 'Doe',
    grossAnnualSalary: 40000,
    netAnnualSalary: 29000,
    annualTaxPaid: 11000,
  };
}
