import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAgencyComponent } from './list-agency/list-agency.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard/auth-guard.service';


const routes: Routes = [
  
  { path: '', component: ListAgencyComponent},
  { path: 'companylist/:id', loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
