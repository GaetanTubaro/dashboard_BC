import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ApiStatData } from '../models/types';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-dashboord',
  templateUrl: './dashboord.component.html',
  styleUrls: ['./dashboord.component.css']
})
export class DashboordComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
          { title: 'Card 5', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
      ];
    })
  );

  recurrence! : number ;
  conversionsCommandes! : number;
  conversionsPanier! : number;
  abandonsPanier!: number;

  constructor(private breakpointObserver: BreakpointObserver,private http : HttpClient, private authService : AuthService) {
    this.getAllStat();
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
