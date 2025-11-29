import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';
import { HeaderComponent } from '../../../components/header/header.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent ,SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(
    private location: Location,
    private authService: AuthService,
    private router: Router
  ) {}

  back() {
    this.location.back();
  }

  login() {
    const usuario = {
      email: this.email,
      senha: this.senha
    };

    this.authService.login(usuario).subscribe({
      next: res => {
        alert('Login realizado com sucesso!');
        this.router.navigate(['/']); 
      },
      error: err => {
        alert('Erro: ' + err.error);
      }
    });
  }
}

