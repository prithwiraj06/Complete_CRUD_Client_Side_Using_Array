import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { EmployeeListService } from "src/Services/employeeList.service";
@Injectable()
export class EmployeeListCanActiveGuardService implements CanActivate
{
    constructor(private _router:Router,private _employeeListService:EmployeeListService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        const employeeExists = !!this._employeeListService.getEmployeeById(+route.paramMap.get('id'));
        if(employeeExists)
        {
            return true;
        }
        else
        {
            this._router.navigate(['/notfound']);
            return false;
        }
    }
}