import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent ,SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class LoginComponent {}
