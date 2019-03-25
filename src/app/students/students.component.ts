import { Component, OnInit } from '@angular/core';

import {Student} from '../student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {id: '2', name: 'J. Foe', grade: 5},
    {id: '3', name: 'J. Doe', grade: 4},
    {id: '4', name: 'J. Joe', grade: 3},
    {id: '5', name: 'J. Boe', grade: 2}
  ];


  constructor() { }

  ngOnInit() {
  }

}
