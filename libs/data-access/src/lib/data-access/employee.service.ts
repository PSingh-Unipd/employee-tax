import { Injectable } from '@angular/core';
import { EmployeeApiService } from './employee-api.service';
import { EmployeeMockService } from './employee-mock.service';
import { IEmployeeService } from '../models/employee-service.interface';
import { Observable } from 'rxjs';
import { IEmployee, IEmployeeDetails } from '../models/employee.interface';

@Injectable()
export class EmployeeService implements IEmployeeService {
  private useMockFeatureFlag = false;

  constructor(
    private apiService: EmployeeApiService,
    private mockService: EmployeeMockService
  ) {}

  private get service(): IEmployeeService {
    return this.useMockFeatureFlag ? this.mockService : this.apiService;
  }

  getAll(): Observable<IEmployee[]> {
    return this.service.getAll();
  }

  getById(id: string): Observable<IEmployeeDetails> {
    return this.service.getById(id);
  }

  updateSalary(id: string, newSalary: number): Observable<IEmployeeDetails> {
    return this.service.updateSalary(id, newSalary);
  }
}
