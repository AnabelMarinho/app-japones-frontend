import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'teste-usuarios',
  standalone: true,
  template: `<p>Teste Usuarios works</p>`,
})
export class TesteUsuariosComponent {}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <router-outlet></router-outlet>
  `,
})
export class App {
  protected readonly title = signal('app-japones');
}
