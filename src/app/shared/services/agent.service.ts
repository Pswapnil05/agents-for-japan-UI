import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agency, Company } from '../models/config.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {


  constructor(private http: HttpClient) { }

  // private _url: string = "http://localhost:9001/agentsforjapan/agency";

getAgencyListResponse(): Observable<HttpResponse<Agency>> {
  //const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(username + ':' + password)})
  return this.http.get<Agency>(`${environment.apiEndPoint}agency` , { observe: 'response'});
}

addNewCompany(company,id) {
  return this.http.post<Company>(`${environment.apiEndPoint}agency/company/`+id, company);
}

}
