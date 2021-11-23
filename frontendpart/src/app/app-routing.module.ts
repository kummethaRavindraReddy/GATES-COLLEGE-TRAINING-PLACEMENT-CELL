import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './companies/companies.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { ApplynowDetailsComponent } from './applynow-details/applynow-details.component';
import { UpdateApplynowComponent } from './update-applynow/update-applynow.component';
import { ApplynowListComponent } from './applynow-list/applynow-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { UpdateAddcompanyComponent } from './update-addcompany/update-addcompany.component';
import { AddcompanyListComponent } from './addcompany-list/addcompany-list.component';




const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'applynow', component: ApplynowComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'Student-details/:id', component: StudentDetailsComponent},
  {path: 'update-applynow/:id', component: UpdateApplynowComponent},
  {path: 'applynow-details/:id', component: ApplynowDetailsComponent},
  {path: 'applynow-list', component: ApplynowListComponent},
  {path: 'studentlogin', component: StudentloginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  {path: 'addcompany', component: AddcompanyComponent},
  {path: 'update-addcompany/:id', component: UpdateAddcompanyComponent},
  {path: 'addcompany-list', component: AddcompanyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }


