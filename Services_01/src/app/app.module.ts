import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ForserviceComponent } from './forservice/forservice.component';
import { EmployeesService } from './services/employees.service';
import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
   //  LifecyclehooksComponent,
    ForserviceComponent,
    ManagerComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
