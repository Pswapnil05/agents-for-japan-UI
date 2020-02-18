import { Component, OnInit } from '@angular/core';
import { Agency, User } from 'src/app/shared/models/config.model';
import { AgentService } from 'src/app/shared/services/agent.service';



@Component({
  selector: 'app-list-agency',
  templateUrl: './list-agency.component.html',
  styleUrls: ['./list-agency.component.css']
})
export class ListAgencyComponent implements OnInit {

  public agencyList: any=[];
  agency: any;
  public userList: any[]=[];
  id;
  agencyFlag:boolean=true;
  userFlag: boolean=true;
  
  constructor(private agentService: AgentService) { }

  ngOnInit() {
   this.showAgencyListResponse(); 
  
  }

  showAgencyListResponse() {
    this.agentService.getAgencyListResponse()
      .subscribe(resp => { this.agencyList = resp.body;
        // console.log(this.agencyList);
        // this.show();
      });
  }

  show() {
    // this.agency = this.agencyList.filter(e => e.agency_code == 1);
    // console.log(this.agency);
    
  }

  getUsers(agency_code: number) {
    if(agency_code) {
      // console.log(agency_code);
    this.agency = this.agencyList.filter(e => e.agency_code == agency_code);
    // console.log(this.agency);
    this.agency.filter(data => this.userList = data.users);
    // console.log(this.userList);
    this.id = agency_code;
    this.agencyFlag = false;
    }
  }

  userChange(userId: number) {
    if(userId) {
      this.userFlag = false;
    }
  }

}
