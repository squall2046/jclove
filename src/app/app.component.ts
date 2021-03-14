import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { App } from './app.model';
import { Router } from '@angular/router';

import { UserService } from 'src/app/shared/services/user.service';
import { ProfileService } from './profile/profile.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  app: App;
  user: User[] = [];

  constructor(
    private appService: AppService,
    private router: Router,
    private userService: UserService,
    public profileService: ProfileService,
  ) { }
  ngOnInit(): void {
    this.app = this.appService.app;
    this.setbackTo();
    this.initialUsers();
    // this.enterProfile();
  }

  setbackTo() {
    setTimeout(() => {
      const path = this.router.url;

      switch (path) {
        case "/math":
          this.app.main.headIcon = "iso";
          this.app.main.headText = "Math";
          break;
        case "/english":
          this.app.main.headIcon = "explicit";
          this.app.main.headText = "English";
          break;
        case "/mandarin":
          this.app.main.headIcon = "translate";
          this.app.main.headText = "Mandarin";
          break;
        case "/quiz":
          this.app.main.headIcon = "menu_book";
          this.app.main.headText = "Quiz";
          break;
        case "/profile":
          this.app.main.headIcon = "face";
          this.app.main.headText = "Profile";
          break;
      }

      if (path === "/math/units" || path === "/math/tens" || path === "/math/theory") {
        this.app.path = "/math";
        this.app.main.headIcon = "iso";
        this.app.main.headText = path;
      }
    });
  }

  backTo() {
    switch (this.app.path) {
      case "/math":
        this.router.navigate(['/math']);
        this.app.main.headIcon = "iso";
        this.app.main.headText = "math";
        break;
      case "/english":
        this.router.navigate(['/english']);
        this.app.main.headIcon = "iso";
        this.app.main.headText = "english";
        break;
      case "/mandarin":
        this.router.navigate(['/mandarin']);
        this.app.main.headIcon = "iso";
        this.app.main.headText = "mandarin";
        break;
      case "/quiz":
        this.router.navigate(['/quiz']);
        this.app.main.headIcon = "";
        this.app.main.headText = "";
        break;
    }
    this.app.path = "";
  }

  initialUsers() {
    this.userService.getUsers().subscribe(res => {
      this.userService.users = res;
      // this.userService.rankingEvent();
      console.log("App run, get all users, (ranked in mongodb)", this.userService.users);
    });
  }

  // enterProfile() {
  //   this.profileService.getProfile().subscribe(res => {
  //     this.user = res;
  //     console.log("App run, get initial rewards from database", res);
  //     // ========> warn: object != object
  //     // this.profileService.profile = this.user[0];
  //     this.profileService.profile.username = this.user[0].username;
  //     this.profileService.profile.password = this.user[0].password;
  //     this.profileService.profile.firstName = this.user[0].firstName;
  //     this.profileService.profile.lastName = this.user[0].lastName;
  //     this.profileService.profile.email = this.user[0].email;
  //     this.profileService.profile.userImage = this.user[0].userImage;
  //     this.profileService.profile.rewards.rainbow = this.user[0].rewards.rainbow;
  //     this.profileService.profile.rewards.star = this.user[0].rewards.star;
  //     this.profileService.profile.rewards.rainbows = this.user[0].rewards.rainbows;
  //     this.profileService.profile.rewards.stars = this.user[0].rewards.stars;
  //   });
  // }

}
