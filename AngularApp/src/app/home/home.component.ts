import { EmployeeService } from './../employee.service';
import { Employee } from './../Models/employee';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

   emps: any;
   currentEmp:any;
  thisCurrentRecord: any;
  constructor(private empService:EmployeeService) {

    this.thisCurrentRecord=this.setInitialValuesForEmpData();

   }
   private setInitialValuesForEmpData() {
    return {
      id: undefined,
      fullName: '',
      address: '',
      phoneNumber: 0,
      position:0
    }
  }

  //I didnt get enough time to work on update as of now, since the APIS are also has to be changed

  public addOrUpdateEmployee=(employee:any)=>{  

      this.empService.add(employee).subscribe(employeeRecord =>{

        this.emps.push(employeeRecord);
      })

  }
  public newClicked = () =>{
    this.thisCurrentRecord = this.setInitialValuesForEmpData(); 
  };

 /*  public deleteClicked(record: { id: any; }) {
    const deleteIndex = _.findIndex(this.joggingData, {id: record.id});
    this.workoutService.remove(record).subscribe(
      result => this.joggingData.splice(deleteIndex, 1)
    );
  } */

  ngOnInit(): void {

    let map= new Map().set(1,"Manager").set(2,"Project Manager").set(3,"Production Manager").set(4,"HR Director").set(5,"Senior Editor").set(6,"Editor");
    this.empService.get().subscribe(results=>{this.emps=results
      
    this.emps.forEach((item: { position: any; }) => item.position = map.get(item.position));
    
    console.log(this.emps);
    
    });

  }

}
