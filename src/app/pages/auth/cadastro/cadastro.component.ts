import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { HeaderComponent } from '../../../components/header/header.component';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SHARED_IMPORTS],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome = '';
  sobrenome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private location: Location,
    private authService: AuthService,
    private router: Router
  ) {}

  back() {
    this.location.back();
  }

  cadastrar() {
    if (this.senha !== this.confirmarSenha) {
      alert('Senhas não coincidem!');
      return;
    }

    const usuario = {
      nome: this.nome + ' ' + this.sobrenome,
      email: this.email,
      senha: this.senha
    };

    this.authService.cadastro(usuario).subscribe({
      next: res => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/']); 
      },
      error: err => {
        alert('Erro: ' + err.error);
      }
    });
  }
}
