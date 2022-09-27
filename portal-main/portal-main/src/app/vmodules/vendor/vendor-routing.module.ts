import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';
import { DbmemoComponent } from './components/dbmemo/dbmemo.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { GoodsreceiptComponent } from './components/goodsreceipt/goodsreceipt.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentageingComponent } from './components/paymentageing/paymentageing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PurchaseorderComponent } from './components/purchaseorder/purchaseorder.component';
import { RecforqtnComponent } from './components/recforqtn/recforqtn.component';
import { VendordashboardComponent } from './components/vendordashboard/vendordashboard.component';

const routes: Routes = [
  {
    path: '',
    component:VendordashboardComponent,
    children:[
      {path:'', redirectTo:'/vendor/profile', pathMatch:'full'},
      {path:'profile', component:ProfileComponent},
      {path:'cdmemo', component:CdmemoComponent},
      {path:'dbmemo', component:DbmemoComponent},
      {path:'financesheet', component:FinancesheetComponent},
      {path:'goodsreceipt', component:GoodsreceiptComponent},
      {path:'invoice', component:InvoiceComponent},
      {path:'paymentageing', component:PaymentageingComponent},
      {path:'purchaseorder', component:PurchaseorderComponent},
      {path:'recforqtn', component:RecforqtnComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
