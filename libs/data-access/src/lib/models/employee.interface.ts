export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  grossAnnualSalary: number;
}

export interface IEmployeeDetails extends IEmployee {
  grossMonthlySalary: number;
  netAnnualSalary: number;
  netMonthlySalary: number;
  annualTaxPaid: number;
  monthlyTaxPaid: number;
}
