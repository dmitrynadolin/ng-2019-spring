import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './student/student.component';
import { StudentsLayoutComponent } from './students-layout/students-layout.component';

const routes: Routes = [
  {
    path: 'students', component: StudentsLayoutComponent,
    children: [
      {path: '', component: StudentsListComponent},
      {path: ':id/edit', component: StudentComponent, data: {action: 'edit'}},
      {path: ':id/details', component: StudentComponent, data: {action: 'details'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
