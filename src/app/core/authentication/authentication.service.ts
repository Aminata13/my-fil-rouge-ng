import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import * as moment from "moment";
import { tap, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public baseUrl = 'https://127.0.0.1:8000/api';
  public authorizationName = 'my_fil_rouge';

  constructor(private http: HttpClient) { }

  login(credentials: any): any {
    return this.http.post(`${this.baseUrl}/login_check`, credentials)
      .pipe(tap(result => this.setSession(result)),shareReplay());
  }

  private setSession(authResult: any) {

      const expiresAt = moment().add(authResult,'milliseconds');

      localStorage.setItem('token', authResult.token);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration!);
      return moment(expiresAt);
  }
}
