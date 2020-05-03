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
    userId: 150001,
    firstName: 'Joanna',
    lastName: 'Wu',
    userName: 'Mu_Yan',
    email: 'joanna.wu@gmail.com',
    userImage: './../../../assets/images/logo/joanna.jpg',
    rewards: {
      star: 0,
      rainbow: 0,
      stars: [],
      rainbows: [],
    }
  };

  base = "localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getRewards(): Observable<User[]> {
    let url = "/api/profile/get/rewards";
    return this.http.get(url, this.httpOptions).pipe(
      map(response => response as User[]))
  }

  updateRewards(): Observable<User[]> {
    let url = "/api/profile/put/rewards";
    return this.http.put(url, this.profile, this.httpOptions).pipe(
      map(response => response as User[]))
  }
}
