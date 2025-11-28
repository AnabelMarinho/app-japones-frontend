import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SHARED_IMPORTS],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {}
