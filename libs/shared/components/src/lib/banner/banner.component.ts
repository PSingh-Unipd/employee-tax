import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [CommonModule],
})
export class BannerComponent {
  title = input.required<string>();
  description = input<string>();
}
