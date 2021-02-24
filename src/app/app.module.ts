import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import {SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {CommonService} from './providers/common.service'
import { AlertService } from './providers/alert.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { EmployeeData } from './providers/employee-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ModalAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    NgxDatatableModule,
    InMemoryWebApiModule.forRoot(EmployeeData), 
    HttpClientModule
  ],

  providers: [CommonService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
