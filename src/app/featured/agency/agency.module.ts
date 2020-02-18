import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAgencyComponent } from './list-agency/list-agency.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyModule } from '../company/company.module';



@NgModule({
  declarations: [ListAgencyComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    FormsModule,
    HttpClientModule,
    CompanyModule,
  ]
})
export class AgencyModule { }
