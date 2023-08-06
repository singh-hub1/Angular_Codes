import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ProgramnameComponent } from './programname/programname.component';
import { ProgramdetailsComponent } from './programdetails/programdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
{path:'program',component:ProgramnameComponent},
{path:'program/:pid',component:ProgramdetailsComponent},
{path:'about',component:AboutComponent},
{path:'**',component:PageNotFoundComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,AboutComponent,
ProgramnameComponent,ProgramdetailsComponent,PageNotFoundComponent]
