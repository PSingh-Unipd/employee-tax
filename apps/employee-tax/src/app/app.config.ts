import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full',
        },
        {
          path: 'details/:id',
          loadComponent: () =>
            import('@employee-tax/employee-details').then(
              (m) => m.EmployeeDetails
            ),
        },
        {
          path: 'list',
          loadComponent: () =>
            import('@employee-tax/employee-list').then((m) => m.EmployeeList),
        },
      ],
      withViewTransitions(),
      withComponentInputBinding()
    ),
  ],
};
