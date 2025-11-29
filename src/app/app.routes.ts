import { Routes } from '@angular/router';
import { TestUsuariosComponent } from './test-usuarios/test-usuarios';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },         
  { path: 'login', component: LoginComponent },      
  { path: 'cadastro', component: CadastroComponent },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      // { path: 'perfil', component: PerfilComponent },
      // { path: 'licoes', component: LicoesComponent },
    ]
  }
];
