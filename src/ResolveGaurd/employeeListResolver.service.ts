import {Injectable} from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Employee } from 'src/Models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeListService } from 'src/Services/employeeList.service';
@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]>
{
    constructor(private _employeeListService:EmployeeListService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> 
    {
        return this._employeeListService.getAllEmployees();
    }
}