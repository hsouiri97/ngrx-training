import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggedComponent} from './logged/logged.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [LoggedComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class CoreModule {
}
