import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  profile: User = {
    userName: '',
    password: ''
  };

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  getUser(un, pw): Observable<any> {
    let url = "/api/login";
    return this.http.post<any>(url, { username: un, password: pw })
  }
}
