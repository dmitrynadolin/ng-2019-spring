import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDescriptionComponent } from './class-description/class-description.component';
import { ScheduleLayoutComponent } from './schedule-layout/schedule-layout.component';

@NgModule({
  declarations: [ScheduleListComponent, ClassListComponent, ClassDescriptionComponent, ScheduleLayoutComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
