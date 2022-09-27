import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentaging',
  templateUrl: './paymentaging.component.html',
  styleUrls: ['./paymentaging.component.css']
})
export class PaymentagingComponent implements OnInit {
  uname:any;
  paymentage:any;
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/paymentage',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.paymentage= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PAYMENTAGE_DS.Response']['IT_PAYMENT_LIST']['item'].slice(1);
    console.log(this.paymentage);
  })
  }
  public myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    // input = document.getElementById("myInput");
     input = (<HTMLInputElement>document.getElementById("myInput"));
     
     filter = input.value.toUpperCase();    
    table = document.getElementById("myTable");
    if(table != null){
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }
    
    
  }

}

