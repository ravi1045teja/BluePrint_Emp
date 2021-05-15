import { Employee } from './../Models/employee';
import { EmployeeService } from './../employee.service';
import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import randomInteger from 'random-int';


@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  emp!: Employee;
  @Output() empCreated = new EventEmitter<any>();
  @Input() currentEmp:any;
  

   posMaps=  [
    {p: 'Manager', position: 1},
    {p: 'Project Manager', position: 2},
    {p: 'Production Manager', position: 3},
    {p: 'HR Director', position: 4},
    {p: 'Senior Editor', ppositionos: 5},
    {p: 'Editor', position: 6},

  ];

  public buttonText = 'Save';

  constructor(private empService:EmployeeService) { }

   
  ngOnInit() {
   
  }
  private clearEmpData = () => {
    
    this.currentEmp = {
      id: randomInteger(20,100),
      fullName: '',
      address: '',
      phoneNumber: 0,
       position: 0
    };
  };


  public addOrUpdateEmployee=()=>{

   this.empService.add(this.emp).subscribe(data=>{
     this.currentEmp=data;
   })
   
    this.empCreated.emit(this.currentEmp);
    this.clearEmpData();


  };

  

}
