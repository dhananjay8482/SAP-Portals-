
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/esigndata';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  name:any;
  ans = false;
  data1:any;
  isAuthenticated = false;
  constructor(private http:HttpClient ,private router:Router) { }
  authenticate(signInData: SignInData): void {
    this.checkCredentials(signInData);
  }
  checkCredential(signInData : SignInData){
    if (signInData.ans) {
      this.isAuthenticated = true;
      localStorage.setItem("uname",signInData.getLogin());
      this.router.navigate(['employee']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): void {  
    this.http.post('http://localhost:4000/elogin',{uname:signInData.getLogin(),pwd:signInData.getPassword()}).subscribe((data:any)=>{
      console.log(data);
      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_LOGIN_DS.Response'].RESULT._text;
      if(this.name =='S'){
        sessionStorage.setItem('uname',signInData.getLogin());
        signInData.ans=true;
        alert("Welcome to Employee Portal");
        this.router.navigate(['employee']);
        this.checkCredential(signInData);
      } 
      else{
        alert("Invalid User");
        signInData.ans=false;
        this.checkCredential(signInData);
      }
    });
    // console.log(this.ans);
    // return this.ans;
  }
  logout() {
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['']);
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  loggedIn(){
    return !!localStorage.getItem("uname");
  }
}
