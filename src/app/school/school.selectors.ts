import {createSelector} from '@ngrx/store';
import {SchoolState, StudentState} from './school.reducers';

export const selectStudentState = (state: SchoolState) => state.studentState;

export const selectStudentFormValue = createSelector(
  selectStudentState,
  (state: StudentState) => state.student
);
