import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employeeDetail=[
    {id: 1, name: 'abc',dept: 'CSE'},
    {id: 2, name: 'xyz',dept: 'ME'},
    {id: 3, name: 'def',dept: 'CE'}
  ]
}
