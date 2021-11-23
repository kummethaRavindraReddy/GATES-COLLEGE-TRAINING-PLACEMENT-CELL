import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { MatButtonModule, MatGridListModule } from '@angular/material/placementdata';
//import {BrowserAnimationModule } from '@angular/platform-browser/animations';

import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule} from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { ApplynowListComponent } from './applynow-list/applynow-list.component';
import { ApplynowDetailsComponent } from './applynow-details/applynow-details.component';
import { UpdateApplynowComponent } from './update-applynow/update-applynow.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

import { AddcompanyComponent } from './addcompany/addcompany.component';
import { UpdateAddcompanyComponent } from './update-addcompany/update-addcompany.component';
import { AddcompanyListComponent } from './addcompany-list/addcompany-list.component';
//material Icon
//import {MatIconModule} from '@angular/material/icon';
//import { MatGridListModule } from '@angular/material/grid-list';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    HomeComponent,
    AboutComponent,
    CompaniesComponent,
    CompanyComponent,
    ApplynowComponent,
    ApplynowListComponent,
    ApplynowDetailsComponent,
    UpdateApplynowComponent,
    LoginComponent,
    LogoutComponent,
    StudentloginComponent,
    AddcompanyComponent,
    UpdateAddcompanyComponent,
    AddcompanyListComponent,
  ],
  imports: [
    BrowserModule,
    //ClarityModule,
    //MatButtonModule,
    //MatGridListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //BrowserAnimationsModule
    //MatGridListModule,
    //MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
