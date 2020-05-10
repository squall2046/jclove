import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  account = {
    login: false
  };

  profile: User = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    userImage: '',
    rewards: {
      star: 0,
      rainbow: 0,
      stars: [],
      rainbows: [],
    }
  };

  // base = "localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getUser(un, pw): Observable<any> {
    let url = "/api/login";

    // ======== comment when ng build prod =========
    // url = "http://localhost:3000/api/login";
    // ======== comment when ng build prod =========

    return this.http.post<any>(url, { username: un, password: pw })
  }

  createUsername(user): Observable<any> {
    let url = "/api/register";

    // ======== comment when ng build prod =========
    // url = "http://localhost:3000/api/register";
    // ======== comment when ng build prod =========

    return this.http.post<any>(url, user)
  }

  updateRewards(): Observable<User[]> {
    let url = "/api/profile/rewards";
    return this.http.put(url, this.profile, this.httpOptions).pipe(
      map(response => response as User[]))
  }
}
