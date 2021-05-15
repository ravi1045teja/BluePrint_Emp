import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent  {

  constructor(){};

  @Input()
  emps: any;
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();


 /*  public deleteRecord(record: any) {
    this.recordDeleted.emit(record);
  } */
    
  

  public newRecord() {
    this.newClicked.emit();
  }


  
}
