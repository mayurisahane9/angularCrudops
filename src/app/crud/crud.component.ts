import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AlertService } from '../providers/alert.service';
import { CommonService } from '../providers/common.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  angForm: FormGroup;
  page: any = {
    limit: 7,
    count: 0,
    offset: 0,

    orderBy: 'id',
    orderDir: 'desc'
  };
  tabrows:any;
  model: any={}; 
  employees:any=[];
  emplyadd: any;
  progressPerc:any;
  constructor(private fb: FormBuilder,public _common:CommonService,public alertservice:AlertService) { 
    this.createForm();
    this.getEmployeess();
  }
  progress = 0;
  progressColor = 'green'
  remainingProgressColor = 'red';
  ngOnInit(): void {
  }

  getEmployeess(){
    this._common.getEmployees().subscribe(data => {
      this.employees = data;
      this.tabrows=data;
      console.log("employee list",this.employees.length);
      this.progressPerc = this.employees.length*10;
      this.progress =  this.progressPerc;
      console.log("percentage",this.progressPerc);
      var count = Number(document.getElementById('count').innerHTML); //set this on page load in a hidden field after an ajax call
      var total = document.getElementById('total').innerHTML; //set this on initial page load
      var pcg = Math.floor(this.employees.length*10);        
      document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',stringify(pcg));
      document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number(pcg)+'%');
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      employee_name: ['', Validators.required ],
      employee_address: ['', Validators.required ],
      employee_contact: ['', Validators.required ],
      employee_email: ['', Validators.required ],
   });
  }
  addform(){
    if(this.model.id){
      console.log("model",this.model);
     
      this._common.getEmployee(this.model.id).subscribe(data => {
        this.emplyadd = data;
        this.emplyadd=this.model;
        console.log("updated data",this.emplyadd);
        console.log("modell",this.model);
        // this.user.model = 'Updated Model';
        this._common.updateEmployee(this.emplyadd).subscribe(data1 => {
          this.getEmployeess();
          this.alertservice.notify('success','Employee Updated Successfully');
        });
        this._common.hideModal('crud');
      });
    }else{
    console.log("form data",this.model);
    this._common.addEmployee(this.angForm.value).subscribe(data => {
      this.emplyadd = data;
      console.log(this.emplyadd);
    });
    this.getEmployeess();
    this._common.notify('success','Employee Added Successfully');
    this._common.hideModal('crud');
  }
  }

  deleteEmployee(row) {

    this._common.deleteEmployee(row.id).subscribe(data => {
      console.log("deleted data",data);
      this.getEmployeess();
      this._common.notify('info','Employee Deleted Successfully');
    });
  }

  setModel(data){
    console.log('role row', data);

    this.model=this._common.cloneWR(data);
   
  }

}
