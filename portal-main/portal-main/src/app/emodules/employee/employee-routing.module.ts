import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { LeaveComponent } from './components/leave/leave.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component:EmployeedashboardComponent ,
    children:[
      {path:'', redirectTo:'/employee/profile', pathMatch:'full'},
      {path:'profile', component: ProfileComponent },
      {path:'leave', component: LeaveComponent },
      {path:'payslip', component:PayslipComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
