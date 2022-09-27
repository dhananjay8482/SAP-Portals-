import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const require: any;
require('jspdf-autotable');
const { jsPDF } = require("jspdf");


@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  uname:any;
  epayslip:any;
  msg="nodata";

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/epayslip',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.epayslip= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PAYSLIP_DS.Response']['IT_PAYSLIP']['item'];
    console.log(this.epayslip);
  })
  }
  SavePDF()
  {
 
    let doc = new jsPDF();
    var prepare: any[] = [];
    this.epayslip.forEach((e:any)=>{
      
       var tempObj :any[] = [];
      console.log(tempObj);
      tempObj.push(e.FPPERIOD._text);
      tempObj.push(e.FPBEGIN._text||this.msg);
      tempObj.push(e.FPEND._text||this.msg);
      tempObj.push(e.BONUSDATE._text||this.msg);
      tempObj.push(e.PAYDATE._text||this.msg);
      tempObj.push(e.PAYTYPE_TEXT._text||this.msg);
      
      prepare.push(tempObj);
      console.log(tempObj)
    });
    doc.text("Leave Data",10,10);
    doc.autoTable({
      head: [['Empno','Start_Date','End_Date','Absence_type','Absence_type(text)','Type']],
      body: prepare
  });
    doc.save('Leave-Details.pdf'); 
 
  }

}
