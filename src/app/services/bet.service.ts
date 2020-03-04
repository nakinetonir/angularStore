import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Bet } from 'src/app/models/Bet';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BetService {
  baseUrl = environment.urlService + environment.urlController;
  constructor(private http: HttpClient) { }

  getBets(): Observable<any> {
    return this.http.get<Bet[]>(`${this.baseUrl}/getBets`);
  }

  postBets(post : Bet): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/post`,
      JSON.stringify(post),
      httpOptions);
  }

  updateBet(put : Bet): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/put`,
      JSON.stringify(put),
      httpOptions
    );
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delById/${id}`, httpOptions);
  }
}

/*
 postProfitabilitySheetMain(sheetMain: ProfitabilitySheetMain): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/postProfitabilitySheetMain`,
      JSON.stringify(sheetMain),
      httpOptions
    );
  }

  /**
   
  updateProfitabilitySheetMain(sheetMain: ProfitabilitySheetMain, id: number): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/putProfitabilitySheetMain/${id}`,
      JSON.stringify(sheetMain),
      httpOptions
    );
  }

 
  deleteProfitabilitySheetMain(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteProfitabilitySheetMain/${id}`, httpOptions);
  }

*/
