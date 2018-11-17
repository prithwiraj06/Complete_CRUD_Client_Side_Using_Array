import {Injectable} from '@angular/core';
import { Employee } from 'src/Models/employee.model';
import { Observable } from 'rxjs';
import {of} from 'rxjs'
import { delay } from 'rxjs/operators';


@Injectable()
export class EmployeeListService
{
    private employeeList:Employee[]=[
        {
            id:101,
            name:'Prithwi',
            gender:'male',
            contactprefrences:'phone',
            phonenumber:8340203933,
            dateofbirth:new Date('10/06/1993'),
            email:'prethwiraj06@gmail.com',
            imagePath:'assets/Images/img1.jpg',
            department:3,
            isactive:true
        },
        {
            id:102,
            name:'Shiv',
            gender:'male',
            contactprefrences:'phone',
            phonenumber:8340203933,
            dateofbirth:new Date('10/06/1993'),
            email:'shiv@gmail.com',
            imagePath:'assets/Images/img2.JPG',
            department:2,
            isactive:true
        },
        {
            id:103,
            name:'Rahul',
            gender:'male',
            contactprefrences:'phone',
            phonenumber:8340203933,
            dateofbirth:new Date('06/10/1993'),
            email:'rahul@gmail.com',
            imagePath:'assets/Images/img3.jpg',
            department:1,
            isactive:true
        }

    ]
    getAllEmployees():Observable<Employee[]>
    {
        return of( this.employeeList).pipe(delay(2000));
    }
    getEmployeeById(id:number):Employee
    {
        return this.employeeList.find(e=>e.id==id);
    }
    saveEmployee(employee:Employee)
    {
        if(employee.id===null){
            const maxId = this.employeeList.reduce(function(e1,e2){
                return(e1.id > e2.id) ? e1 : e2;
            }).id;
            employee.id = maxId + 1;
            this.employeeList.push(employee);
        }
        else{
            const foundEmployee = this.employeeList.findIndex(e=>e.id===employee.id);
            this.employeeList[foundEmployee] = employee;
        }
    }
    deleteEmployeeById(id:number){
        const employeeId = this.employeeList.findIndex(e=>e.id == id);
        this.employeeList.splice(employeeId,1);
    }
    
}