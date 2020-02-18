import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/shared/services/agent.service';
import { Agency } from 'src/app/shared/models/config.model';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  agencyList;
  companyList;
  agency: any;
  id:number;
  
  

  constructor(private route: ActivatedRoute, private agencyService: AgentService) { }

  ngOnInit() {
   this.showCompanyListResponse();
  }

  showCompanyListResponse() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.agencyService.getAgencyListResponse()
    .subscribe(resp => { 
      this.agencyList = resp.body;
      this.agency = this.agencyList.filter((data) => data.agency_code == this.id)[0];
       console.log(this.companyList);
       console.log(this.agencyList);
       console.log(this.agency.name);
      
       
    });
  }

}
