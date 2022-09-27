import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { VloginComponent } from './vlogin/vlogin.component';
import { CustomerModule } from './modules/customer/customer.module';
import { VendorModule } from './vmodules/vendor/vendor.module';
import { EmployeeModule } from './emodules/employee/employee.module';
import { EloginComponent } from './elogin/elogin.component';
import { CustauthGuard } from './guard/cauth/custauth.guard';

const routes: Routes = [
  {path:'landingPage', component:HeaderComponent},
  {path: '', redirectTo: '/landingPage', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'vlogin', component:VloginComponent},
  {path:'elogin', component: EloginComponent },
  {path:'customer', loadChildren: ()=> import('./modules/customer/customer.module').then((m) => m.CustomerModule),canActivate:[CustauthGuard]},
  {path:'vendor', loadChildren:()=> import('./vmodules/vendor/vendor.module').then((m)=>m.VendorModule)},
  {path:'employee', loadChildren:()=> import('./emodules/employee/employee.module').then((m)=>m.EmployeeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
