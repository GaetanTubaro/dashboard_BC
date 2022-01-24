import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ApiStatData } from '../models/types';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dahsboard-page',
  templateUrl: './dahsboard-page.component.html',
  styleUrls: ['./dahsboard-page.component.css']
})
export class DahsboardPageComponent implements OnInit {
  recurrence! : number ;
  conversionsCommandes! : number;
  conversionsPanier! : number;
  abandonsPanier!: number;

  constructor(private http : HttpClient, private authService : AuthService) { }

  ngOnInit(): void {
    
  }
  getAllStat(){
    let url = `https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/stats/2001/2021`;
    let httpHeaders = new HttpHeaders({
      "Authorization": this.authService.token,
      "Content-Type": "Application/json"
    })
    lastValueFrom(this.http.get<ApiStatData>(url, { headers: httpHeaders})).then(
      res => {console.log(res);
               this.recurrence = res.recurrence;
               this.abandonsPanier = res.abandonsPaniers;
               this.conversionsCommandes = res.conversionsCommandes;
               this.conversionsPanier = res.conversionsPaniers
              }
      
    )
  }  
}
