import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { CdmemoComponent } from './components/cdmemo/cdmemo.component';
import { DbmemoComponent } from './components/dbmemo/dbmemo.component';
import { FinancesheetComponent } from './components/financesheet/financesheet.component';
import { GoodsreceiptComponent } from './components/goodsreceipt/goodsreceipt.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PaymentageingComponent } from './components/paymentageing/paymentageing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PurchaseorderComponent } from './components/purchaseorder/purchaseorder.component';
import { RecforqtnComponent } from './components/recforqtn/recforqtn.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { VendordashboardComponent } from './components/vendordashboard/vendordashboard.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';


@NgModule({
  declarations: [
    CdmemoComponent,
    DbmemoComponent,
    FinancesheetComponent,
    GoodsreceiptComponent,
    InvoiceComponent,
    PaymentageingComponent,
    ProfileComponent,
    PurchaseorderComponent,
    RecforqtnComponent,
    SidenavComponent,
    VendordashboardComponent,
    VendorDashboardComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
