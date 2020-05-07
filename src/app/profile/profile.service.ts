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
    username: 'Mu_Yan',
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

  getProfile(): Observable<User[]> {
    let url = "/api/profile";
    // === post to get will be error???? ===
    return this.http.post(url, this.httpOptions).pipe(
      map(response => response as User[]))
  }

  updateRewards(): Observable<User[]> {
    let url = "/api/profile/rewards";
    return this.http.put(url, this.profile, this.httpOptions).pipe(
      map(response => response as User[]))
  }
}
