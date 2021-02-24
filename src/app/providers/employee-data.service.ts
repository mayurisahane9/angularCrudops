
import {Employee} from './employee-data';
//import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeFetch } from './employee-fetch';


export class EmployeeData implements InMemoryDbService {
  createDb(){
    const employees: Employee[] = [
      { id: 1, employee_name: 'xyz', employee_address: 'pune', employee_contact: '0000000000',employee_email:'xyz@gmail.com'  },
      { id: 2,  employee_name: 'abc', employee_address: 'pune', employee_contact: '0000000000',employee_email:'abc@gmail.com'  },
      { id: 3,  employee_name: 'pqr', employee_address: 'pune', employee_contact: '0000000000',employee_email:'pqr@gmail.com'    },
      { id: 4,  employee_name: 'john', employee_address: 'pune', employee_contact: '0000000000',employee_email:'john@gmail.com'   },
      { id: 5,  employee_name: 'rock', employee_address: 'pune', employee_contact: '0000000000',employee_email:'rock@gmail.com'   }

    ];
    const employee: EmployeeFetch[]=[
      {
        id:1,
        employee_name: 'xyz', 
        employee_address: 'pune', 
        employee_contact: '0000000000',
        employee_email:'xyz@gmail.com'
      },
      {
       id:2,
       employee_name: 'abc', 
       employee_address: 'pune', 
       employee_contact: '0000000000',
       employee_email:'abc@gmail.com'
     }    ,
     {
       id:3,
       employee_name: 'pqr',
        employee_address: 'pune',
         employee_contact: '0000000000',
         employee_email:'pqr@gmail.com' 
     }    ,
     {
       id:4,
       employee_name: 'john', 
       employee_address: 'pune', 
       employee_contact: '0000000000',
       employee_email:'john@gmail.com' 
     } ,
     {
       id:5,
       employee_name: 'rock',
        employee_address: 'pune', 
        employee_contact: '0000000000',
        employee_email:'rock@gmail.com' 
     }
     ];
    return {employees, employee};
  }
}
