import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BetUser } from 'src/app/models/BetUser';
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
export class BetUserService {

  baseUrl = environment.urlService + environment.urlControllerBetUser;
  constructor(private http: HttpClient) { }

  getBets(): Observable<any> {
    return this.http.get<BetUser[]>(`${this.baseUrl}/getBetsUser`);
  }

  postBets(post : BetUser): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/post`,
      JSON.stringify(post),
      httpOptions);
  }

  updateBet(put : BetUser): Observable<any> {
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

