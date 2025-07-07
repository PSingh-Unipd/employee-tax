import { signalStore, withState, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { IEmployeeDetails } from '@employee-tax/data-access';
import { EmployeeService } from '@employee-tax/data-access';

type EmployeeDetailsState = {
  employee: IEmployeeDetails | null;
  loading: boolean;
  error: string | null;
};

const initialState: EmployeeDetailsState = {
  employee: null,
  loading: false,
  error: null,
};

export const EmployeeDetailsStore = signalStore(
  withState(initialState),

  withMethods((store, employeeService = inject(EmployeeService)) => {
    let currentId: string | null = null;

    return {
      async loadById(id: string): Promise<void> {
        currentId = id;
        patchState(store, { loading: true, error: null });

        try {
          const employee = await employeeService.getById(id).toPromise();
          patchState(store, { employee, loading: false });
        } catch {
          patchState(store, {
            error: 'Failed to load employee details',
            loading: false,
          });
        }
      },

      async updateSalary(id: string, newSalary: number): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          await employeeService.updateSalary(id, newSalary).toPromise();
          await this.loadById(id); // refresh after update
        } catch {
          patchState(store, { error: 'Salary update failed', loading: false });
        }
      },
    };
  })
);
