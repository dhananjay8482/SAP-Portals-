import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saleorderdata',
  templateUrl: './saleorderdata.component.html',
  styleUrls: ['./saleorderdata.component.css']
})
export class SaleorderdataComponent implements OnInit {
  uname:any;
  saleorder:any;
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/salesorder',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.saleorder= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_SALEORDER_DS.Response']['IT_SALES_ORDERS']['item'];
    console.log(this.saleorder);
  })}
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
