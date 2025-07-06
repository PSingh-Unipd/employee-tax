import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'et-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
