import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  ranking = new EventEmitter();
  subsVar: Subscription;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    let url = "/api/users";

    // ======== comment when ng build prod =========
    // url = "http://localhost:3000/api/users";
    // ======== comment when ng build prod =========

    return this.http.post(url, this.httpOptions).pipe(
      map(response => response as User[]));
  }

  rankingEvent() {
    this.ranking.emit();
  }
}
