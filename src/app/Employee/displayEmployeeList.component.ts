import {Component, Input, OnChanges,SimpleChanges,Output,EventEmitter, OnInit} from '@angular/core';
import { Employee } from 'src/Models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListService } from 'src/Services/employeeList.service';
@Component({
    selector:'displayEmployeeList',    
    templateUrl:'./displayEmployeeList.component.html',
    styleUrls:['./displayEmployeeList.component.css']
})
export class DisplayEmployeeListComponent implements OnInit
{
    @Input() employee:Employee; 
    @Input() searchTerm:string;
    private selectedEmployeeId: number;
    @Output() notifyDelete : EventEmitter<number>= new EventEmitter<number>();
    showDeleteConfirmationMessage = false;
    constructor(private _activatedRoute:ActivatedRoute,private _router:Router,private _employeeListService:EmployeeListService)
    {
        
    }
    ngOnInit(){
        this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id');
    }
    //works when click on  panel body navigates to employee details page with id
    getEmployeeWithId(id: number) {
        this._router.navigate(['/employees', id], {
            queryParams: { 'searchTerm': this.searchTerm, 'testValue': 'testvalue' },

        });
    }
    getEmployeeDetailsById(){
        this._router.navigate(['/employees', this.employee.id], {
            queryParams: { 'searchTerm': this.searchTerm, 'testValue': 'testvalue' }
        });
    }
    editEmployeeById(){
        this._router.navigate(['/editEmployee',this.employee.id]);
    }
    deleteEmployeeById(){
        this._employeeListService.deleteEmployeeById(this.employee.id);
        this.notifyDelete.emit(this.employee.id);
    }
    
}