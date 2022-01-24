import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  public email! :string;
  public pass! : string;
  public connexionFail = false;


  constructor(private monServiceAuth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  validForm(form : NgForm){
     this.monServiceAuth.checkAuth(this.email, this.pass).then(res  =>{
       if(res){
        this.router.navigate(["dashboard"]);
       } else {
         this.connexionFail = true; 
       }
     }); 
  }
}