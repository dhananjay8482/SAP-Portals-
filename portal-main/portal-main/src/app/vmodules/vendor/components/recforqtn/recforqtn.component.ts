import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recforqtn',
  templateUrl: './recforqtn.component.html',
  styleUrls: ['./recforqtn.component.css']
})
export class RecforqtnComponent implements OnInit {

  uname:any;
  Reqforpurchase:any;
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/Reqforpurchase',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.Reqforpurchase= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_REQUEST_DS.Response']['IT_RFQ_LIST']['item'];
    console.log(this.Reqforpurchase);
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

