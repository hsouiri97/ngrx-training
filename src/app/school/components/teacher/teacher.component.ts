import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TeacherState} from '../../school.reducers';
import {Teacher} from '../../models/teacher';
import {Subscription} from 'rxjs';
import * as SchoolActions from '../../school.actions';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit, OnDestroy {

  form: FormGroup;
  teacherFormValueSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<TeacherState>) {
    this.form = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      schoolSubject: new FormControl()
    });
  }

  ngOnInit(): void {
    this.teacherFormValueSubscription =  this.store.select(state => state.teacher).subscribe((value: Teacher) => {
      this.form.patchValue(value);
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  ngOnDestroy(): void {
    this.store.dispatch(SchoolActions.AUTO_SAVE_TEACHER_FORM({teacher: this.form.value}));
    this.teacherFormValueSubscription.unsubscribe();
  }

}
