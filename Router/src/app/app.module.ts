import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ProgramnameComponent } from './programname/programname.component';
// import { ProgramdetailsComponent } from './programdetails/programdetails.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // HomeComponent,
  //   AboutComponent,
  //   ProgramnameComponent,
  //   ProgramdetailsComponent,
  //   PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
