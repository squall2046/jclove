import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
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

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

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
