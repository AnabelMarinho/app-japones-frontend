import { Component, ViewEncapsulation } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/shared-imports';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainLayoutComponent {}
