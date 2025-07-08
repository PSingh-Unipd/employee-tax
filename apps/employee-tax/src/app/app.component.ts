import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {
  EmployeeApiService,
  EmployeeMockService,
  EmployeeService,
} from '@employee-tax/data-access';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, NavbarComponent, FooterComponent, HttpClientModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EmployeeService,
    EmployeeApiService,
    EmployeeMockService,
    BrowserModule,
  ],
})
export class AppComponent {
  protected title = 'incame-tax-calculator-app';
}
