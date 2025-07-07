import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee, IEmployeeDetails } from '../models/employee.interface';
import { IEmployeeService } from '../models/employee-service.interface';

@Injectable()
export class EmployeeApiService implements IEmployeeService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5013/api/employees';

  getAll(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseUrl);
  }

  getById(id: string): Observable<IEmployeeDetails> {
    return this.http.get<IEmployeeDetails>(`${this.baseUrl}/${id}`);
  }

  updateSalary(id: string, newSalary: number): Observable<IEmployeeDetails> {
    return this.http.put<IEmployeeDetails>(`${this.baseUrl}/${id}/salary`, {
      grossAnnualSalary: newSalary,
    });
  }
}
