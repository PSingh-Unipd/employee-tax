import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected title = 'incame-tax-calculator-app';
}
