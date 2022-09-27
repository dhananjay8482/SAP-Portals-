import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { PayslipComponent } from './components/payslip/payslip.component';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LeaveComponent } from './components/leave/leave.component';


@NgModule({
  declarations: [
    // PayslipComponent,
    // ProfileComponent,
    // SidenavComponent,
    // EmployeedashboardComponent,
    EmployeedashboardComponent,
    SidenavComponent,
    ProfileComponent,
    PayslipComponent,
    LeaveComponent
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule

  ]
})
export class EmployeeModule { }
