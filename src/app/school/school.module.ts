import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { SchoolRootComponent } from './components/school-root/school-root.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {studentReducer, teacherReducer} from './school.reducers';



@NgModule({
  declarations: [StudentComponent, TeacherComponent, SchoolRootComponent],
  exports: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('student', studentReducer),
    StoreModule.forFeature('teacher', teacherReducer)
  ]
})
export class SchoolModule { }
