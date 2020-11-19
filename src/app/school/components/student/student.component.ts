import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {StudentState} from '../../school.reducers';
import * as SchoolActions from '../../school.actions';
import {Subscription} from 'rxjs';
import {Student} from '../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit, OnDestroy {

  form: FormGroup;
  studentFormValueSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<StudentState>) {
    this.form = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      rating: new FormControl()
    });
  }

  ngOnInit(): void {
    this.studentFormValueSubscription = this.store.select(state => state.student)
      .subscribe((value: Student) => {
        this.form.patchValue(value);
      });
  }

  onSubmit(): void {

  }

  ngOnDestroy(): void {
    this.store.dispatch(SchoolActions.AUTO_SAVE_STUDENT_FORM({student: this.form.value}));
    this.studentFormValueSubscription.unsubscribe();
  }

}
