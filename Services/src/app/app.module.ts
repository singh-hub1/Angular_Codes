import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForServiceComponent } from './for-service/for-service.component';
import { EmployeesService } from './sevices/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    
    ForServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
