import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';


const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'Student-details/:id', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }


