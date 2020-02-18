import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCompanyComponent } from './list-company/list-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';


const routes: Routes = [
  { path: '', component: ListCompanyComponent},
  { path: 'company/:id', component: AddCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
