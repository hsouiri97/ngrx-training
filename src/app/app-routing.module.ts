import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedComponent} from './core/logged/logged.component';
import {SCHOOL_ROUTES} from './school/school.routes';

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [...SCHOOL_ROUTES],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
