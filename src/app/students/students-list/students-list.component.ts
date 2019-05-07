import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from 'src/app/student';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  private students: Student[];

  constructor(private studentsService: StudentsService, private loggerService : LoggerService) {

   }

  ngOnInit() {

    this.loggerService.info(`Initializing students list ${new Date()}`);

    this.studentsService.get().subscribe(data => this.students = data);
  }


}
