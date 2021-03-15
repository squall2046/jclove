import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  loginInfo = { username: "", password: "" };
  loginApiUrl = "/api/login";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private httpClient: HttpClient,
    private profileService: ProfileService,
  ) { }

  getToken(): Observable<any> {
    return this.httpClient.post<any>(this.loginApiUrl, this.loginInfo, this.httpOptions);
  }

  // TODO: add the logic to read check the token -valid/expiry

  isAuthenticated() {
    let savedToken = window.localStorage.getItem('authToken');
    if (savedToken) {
      let tokenInfo = JSON.parse(savedToken);
      this.profileService.profile = tokenInfo.user;
      console.log(this.profileService.profile);
      this.loggedIn = true;
    }

    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.loggedIn);
    //   });
    // })
    // return true;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
