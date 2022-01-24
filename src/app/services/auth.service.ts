import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { APILoginData } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public isConnected = false;
public token! : string;
  constructor(private HttpClient  : HttpClient ) {}

  checkAuth(email : string, pass:string) : Promise<boolean>  {
      let url = `https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/login`;
      return lastValueFrom(
        this.HttpClient.post<APILoginData>(url, JSON.stringify({
          email : email,
          password : pass
        }))
      ).then(
        res => {
          this.token = res.token;
          this.isConnected = true;
          return true;
        },
        erreur => false
      )
  }
}
