import {Student} from './models/student';
import {createReducer, on} from '@ngrx/store';
import * as SchoolActions from './school.actions';
import {Teacher} from './models/teacher';

export interface SchoolState {
  studentState: StudentState;
}

export interface StudentState {
  student: Student;
}

export interface TeacherState {
  teacher: Teacher;
}


export const studentInitialState: Student = {
  firstName: '', lastName: '', rating: null, age: null
};

export const teacherInitialState: Teacher = {
  firstName: '', lastName: '', schoolSubject: ''
};

export const studentReducer = createReducer(
  studentInitialState,

  on(SchoolActions.AUTO_SAVE_STUDENT_FORM, (state, action) => {
    console.log('the action: ', action);
    return {...state, ...action.student};
  })
);

export const teacherReducer = createReducer(
  teacherInitialState,

  on(SchoolActions.AUTO_SAVE_TEACHER_FORM, (state: Teacher, action) => {
    return action.teacher;
  })
);
