import { Injectable } from "@angular/core";

@Injectable()

export class EmployeeService {
    employee=[
        {id: 1, name: 'abc',dept: 'CSE'},
        {id: 2, name: 'xyz',dept: 'ME'},
        {id: 3, name: 'def',dept: 'CE'}
    ]

    getEmployee()
    {
        return this.employee
    }
    setEmployee(emp)
    {
        this.employee.push(emp)
    }
}