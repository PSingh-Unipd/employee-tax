import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeSalaryUpdate } from './employee-salary-update';

describe('EmployeeDetails', () => {
  let component: EmployeeSalaryUpdate;
  let fixture: ComponentFixture<EmployeeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSalaryUpdate],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeSalaryUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
