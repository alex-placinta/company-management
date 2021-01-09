import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Company{
  constructor(
    public id:string,
    public name:string,
    public address:string,
    public registrationNumber:string,
    
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getCompanies()
  {
    console.log("test call campanies");
    return this.httpClient.get<Company[]>('http://localhost:8090/api/v1/companies/getAll');
  }
}