import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-test-usuarios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Usuários</h1>
    <ul>
      <li *ngFor="let usuario of usuarios">{{ usuario.nome }}</li>
    </ul>
  `
})
export class TestUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe({
      next: data => this.usuarios = data,
      error: err => console.error(err)
    });
  }
}
