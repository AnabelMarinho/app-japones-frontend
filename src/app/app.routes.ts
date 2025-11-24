import { Routes } from '@angular/router';
import { TestUsuariosComponent } from './test-usuarios/test-usuarios';

export const routes: Routes = [
  { path: 'teste', component: TestUsuariosComponent },
  { path: '', redirectTo: 'teste', pathMatch: 'full' } 
];
