import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';

import { StudentsService } from '../students.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private student: Student;
  private action: string;

  constructor(private route: ActivatedRoute, 
    private studentsService : StudentsService,
    private location: Location) {

    this.action = route.snapshot.data.action;
    
  }

  ngOnInit() {
    this.studentsService.find(parseInt(this.route.snapshot.params.id, 10))
    .subscribe(data=>this.student = data);

  }

  public save(){
    this.studentsService.update(this.student).subscribe(data=>this.location.back());
    
  }

}
