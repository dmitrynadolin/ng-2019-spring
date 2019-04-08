import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { STUDENTS } from 'src/app/mock-students';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  private students: Student[];

  constructor() { }

  ngOnInit() {
    this.students = STUDENTS;
  }

}
