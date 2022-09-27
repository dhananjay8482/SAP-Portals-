import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-inquirydata',
  templateUrl: './inquirydata.component.html',
  styleUrls: ['./inquirydata.component.css']
})
export class InquirydataComponent implements OnInit {

  inquiry:any;
uname:any;

constructor(public authenticationService: AuthenticationService,private router:Router,private http:HttpClient) {​​​​​ }​​​​​
logout() {​​​​​
this.authenticationService.logout();
// sessionStorage.clear();
  }​​​​​
  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/inquiry',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.inquiry= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INQUIRYLIST_DS.Response']['IT_INQUIRY_LIST']['item'];
    console.log(this.inquiry);
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
