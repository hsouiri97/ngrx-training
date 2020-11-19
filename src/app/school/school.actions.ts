import {createAction, props} from '@ngrx/store';
import {Student} from './models/student';
import {Teacher} from './models/teacher';

export const AUTO_SAVE_STUDENT_FORM = createAction(
  'STUDENT COMPONENT [AUTO_SAVE FORM]',
  props<{ student: Student }>()
);

export const AUTO_SAVE_TEACHER_FORM = createAction(
  'TEACHER COMPONENT [AUTO_SAVE FORM]',
  props<{ teacher: Teacher}>()
);
