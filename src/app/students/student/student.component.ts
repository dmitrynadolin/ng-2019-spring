import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';
import { STUDENTS } from 'src/app/mock-students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private student: Student;
  private action: string;

  constructor(private route: ActivatedRoute) {

    this.action = route.snapshot.data.action;
  }

  ngOnInit() {
    this.student = STUDENTS.find(x => x.id === parseInt(this.route.snapshot.params.id, 10));

  }

}
