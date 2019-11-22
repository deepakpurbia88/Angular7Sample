import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000/employee';
  constructor(private http: HttpClient){}
  login(email_id,pwd){
    
    const obj = {
      "employee_email_id" : email_id,
      "employee_password" : pwd
      
    };

    console.log("Sending Data: ", obj);

    
    //return (this.http.get(`${this.uri}/login`, obj));
    
    return (this.http.post(`${this.uri}/login`,obj));
      
    
  }
}
