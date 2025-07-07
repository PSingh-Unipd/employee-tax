import { Observable } from 'rxjs';
import { IEmployee, IEmployeeDetails } from './employee.interface';

export interface IEmployeeService {
  getAll(): Observable<IEmployee[]>;
  getById(id: string): Observable<IEmployeeDetails>;
  updateSalary(id: string, newSalary: number): Observable<IEmployeeDetails>;
}
