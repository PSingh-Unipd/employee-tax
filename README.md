# Employee Tax Calculator – Angular (Nx Monorepo)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45">
</a>

This is the **Angular frontend** for the **Employee Tax Calculator** project, implemented using an **Nx monorepo**. The app calculates UK income tax based on salary bands and provides a breakdown of gross, tax, and net salary per employee.

---

## Monorepo Structure

The application is split into modular libraries to support enterprise-scale architecture:

| Library                          | Purpose                                          |
| -------------------------------- | ------------------------------------------------ |
| `@employee-tax/data-access`      | Handles API communication, DTOs, and interfaces  |
| `@employee-tax/employee-list`    | Feature lib to display all employees             |
| `@employee-tax/employee-details` | Feature lib to display & update employee details |
| `@employee-tax/components`       | Shared components library (e.g., tables)         |

---

## State Management

Implemented using **NgRx Signal Store** for efficient and reactive state management:

- `EmployeeListStore`: Loads and manages the list of employees.
- `EmployeeDetailsStore`: Fetches and updates a single employee's salary data.

Both stores use Angular Signals, computed properties, and are co-located with their respective feature libraries for modularity.

---

## Prerequisites

Before running the project locally, make sure you have the following installed:

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0
- **Angular CLI** ≥ 17 (optional for global usage)
- **Nx CLI** (optional but recommended):  
   Install it globally using:

  ```bash
  npm install -g nx
  ```

## 🚀 Getting Started

### Run the app locally

```bash
# Clone the repository
git clone https://github.com/PSingh-Unipd/employee-tax.git

# Navigate into the project directory
cd Employee-Tax

# Install dependencies
npm install --legacy-peer-deps  # Nx SignalStore is not fully compatible with Angular 20

# Fix any known security issues (optional but recommended)
npm audit fix

# Serve the project
nx run serve employee-tax
```
