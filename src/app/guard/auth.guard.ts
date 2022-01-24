import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private serviceAuth : AuthService){}

  canActivate() : boolean{
  return this.serviceAuth.isConnected;
  
  }
}
