import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './student/student.component';
import { StudentsLayoutComponent } from './students-layout/students-layout.component';
import { StudentsService } from './students.service';

@NgModule({
  declarations: [StudentsListComponent, StudentComponent, StudentsLayoutComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ],
  providers:[
    StudentsService
  ]
})
export class StudentsModule { }
