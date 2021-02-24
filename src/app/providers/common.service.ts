import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject,throwError} from 'rxjs';
import { AlertService } from './alert.service';

import { tap, catchError, map } from 'rxjs/operators';
import { EmployeeData } from './employee-data.service';
import { Employee } from './employee-data';
import { EmployeeFetch } from './employee-fetch';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
declare var jQuery:any;

@Injectable()
export class CommonService {
 
  apiurl = 'api/employees';  
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };     
    loader:any=null;
  
    constructor(
      public alertService: AlertService,
      private http: HttpClient
    ) { 
    
    }




    cloneWR(p){
      return JSON.parse(JSON.stringify(p));
    }


    showModal(id:any){
       this.openModal(id);
    }
     

    openModal(event) {
       document.querySelector('#' + event).classList.add('md-show');
    }

 

    hideModal(event=''){
      document.querySelector('#' + event).classList.remove('md-show');
      if(event ==='0')
      {
     // jQuery(".modal").modal("hide");
      }
      else {
     //   jQuery("#"+id).modal("hide");

      }
    }


    notify(type, title, msg= null) {
      this.alertService.notify(type, title, msg);
    }



    field_validate($event,cf,$object){
      let regexp:any;
       
      let val:any=$event.target.value;
      if(val.length < 1){return 0;}

          switch(cf){

            case 'mobile':
            regexp= /^([0-9]){10}?$/;
            console.log(regexp.test(val));
            if(regexp.test(val)){

            } else {
              $event.target.value='';
              $object='';
              this.notify('error','Invalid Mobile Number');
            }
            break;

          }
    }

    private handleError(error: any) {
      console.error(error);                                 
      return throwError(error);
    }
    
    getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.apiurl).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
    }
    getEmployee(id: number): Observable<EmployeeFetch> {
      const url = `${this.apiurl}/${id}`;
      return this.http.get<EmployeeFetch>(url).pipe(
      catchError(this.handleError)
      );
      }


      
      addEmployee(employee: EmployeeFetch): Observable<EmployeeFetch> {
        employee.id=null;
        return this.http.post<EmployeeFetch>(this.apiurl, employee, this.httpOptions).pipe(
          tap(data => console.log(data)),
          catchError(this.handleError)
        );
    }

    updateEmployee(employee: EmployeeFetch): Observable<EmployeeFetch>{
      const url = `${this.apiurl}/${employee.id}`;
      return this.http.put<EmployeeFetch>(this.apiurl, employee, this.httpOptions).pipe(
        map(() => employee),
        catchError(this.handleError)
      );
    }
  
  
    deleteEmployee(id: number): Observable<EmployeeFetch> {
      const url = `${this.apiurl}/${id}`;
      return this.http.delete<EmployeeFetch>(url, this.httpOptions).pipe(
        catchError(this.handleError)
      );
    }
   
    
}
