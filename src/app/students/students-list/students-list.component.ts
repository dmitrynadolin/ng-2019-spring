import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  private students: Student[];

  constructor(private studentsService: StudentsService) {

   }

  ngOnInit() {
    this.studentsService.get().subscribe(data => this.students = data);
  }


}
