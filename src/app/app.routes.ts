import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CadastroComponent } from './pages/auth/cadastro/cadastro.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RevisaoComponent } from './pages/revisao/revisao.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LicoesComponent } from './pages/licoes/licoes.component';
import { VocabularioComponent } from './pages/vocabulario/vocabulario.component';

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
      { path: 'licoes', component: LicoesComponent},
      { path: 'vocabulario', component: VocabularioComponent },
      { path: 'revisao', component: RevisaoComponent },
      { path: 'perfil', component: PerfilComponent },
    ]
  }
];
