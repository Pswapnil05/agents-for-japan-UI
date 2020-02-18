import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './featured/login/login.component';
import { LogoutComponent } from './featured/logout/logout.component';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { RegisterComponent } from './featured/register/register.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'agency', loadChildren: () => import('./featured/agency/agency.module').then(m => m.AgencyModule), canActivate:[AuthGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
