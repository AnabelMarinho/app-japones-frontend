import { Routes } from '@angular/router';
import { TestUsuariosComponent } from './test-usuarios/test-usuarios';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },         
  { path: 'login', component: LoginComponent },      
  { path: 'cadastro', component: CadastroComponent },
  { path: 'teste', component: TestUsuariosComponent } 
];
