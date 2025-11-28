import { Routes } from '@angular/router';
import { TestUsuariosComponent } from './test-usuarios/test-usuarios';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },         
  { path: 'login', component: LoginComponent },      
  { path: 'cadastro', component: CadastroComponent },
  

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: TestUsuariosComponent },
    ]
  }
];
