import { signalStore, withState, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { IEmployee } from '@employee-tax/data-access';
import { EmployeeService } from '@employee-tax/data-access';

type EmployeeListState = {
  employees: IEmployee[];
  loading: boolean;
  error: string | null;
};

const initialState: EmployeeListState = {
  employees: [],
  loading: false,
  error: null,
};

export const EmployeesListStore = signalStore(
  withState(initialState),

  withMethods((store, employeeService = inject(EmployeeService)) => {
    return {
      async loadAll(): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          const employees = await employeeService.getAll().toPromise();
          patchState(store, { employees, loading: false });
        } catch {
          patchState(store, {
            error: 'Failed to load employee details',
            loading: false,
          });
        }
      },
    };
  })
);
