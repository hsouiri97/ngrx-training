import {Routes} from '@angular/router';
import {StudentComponent} from './components/student/student.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {SchoolRootComponent} from './components/school-root/school-root.component';

export const SCHOOL_ROUTES: Routes = [
  {
    path: 'school',
    component: SchoolRootComponent,
    children: [
      {path: 'student', component: StudentComponent},
      {path: 'teacher', component: TeacherComponent}
    ]
  },
  {path: '', redirectTo: 'school/student', pathMatch: 'full'}
];
