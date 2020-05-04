import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: User = {
    userName: '',
    firstName: '',
    lastName: 'Wu',
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

  getRewards(): Observable<User[]> {
    let url = "/api/profile/get/rewards";
    // === post to get will be error???? ===
    return this.http.post(url, this.httpOptions).pipe(
      map(response => response as User[]))
  }

  // getRewards(): Observable<User[]> {
  //   let url = "/api/profile/get/rewards";
  //   // === post to get will be error???? ===
  //   return this.http.get<any>(url, this.httpOptions)
  // }

  updateRewards(): Observable<User[]> {
    let url = "/api/profile/put/rewards";
    return this.http.put(url, this.profile, this.httpOptions).pipe(
      map(response => response as User[]))
  }
}
