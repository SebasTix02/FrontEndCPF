import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomingsRoutingModule } from './incomings-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    IncomingsRoutingModule,
    SharedModule
  ]
})
export class IncomingsModule { }
