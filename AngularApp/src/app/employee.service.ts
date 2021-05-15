import { Employee } from './Models/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:4030/employee/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  //Get All Employees List

  public get() {
    return this.http.get<Employee[]>(this.accessPointUrl, { headers: this.headers });
  }

  //Add Employee to Json Data

  public add(employee:Employee) {
    return this.http.post(this.accessPointUrl, employee, { headers: this.headers });
  }
  //Delete Employee

  public delete(id:any) {
    return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers });
  }

  //Update Employee

  public update(employee:Employee) {
    return this.http.put(this.accessPointUrl, employee, { headers: this.headers });
  }

}
