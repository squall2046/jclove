import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { App } from 'src/app/app.model';

import { ProfileService } from 'src/app/profile/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showSidebar = new EventEmitter();
  app: App;
  profile: User;
  account: any;

  constructor(
    private appService: AppService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.app = this.appService.app;
    this.profile = this.profileService.profile;
    this.account = this.profileService.account;
  }

  toggleSidebarInPhoneApp() {
    this.app.sidebar.show = !this.app.sidebar.show;
    // this.app.sidebar.isCollapsed = !this.app.sidebar.isCollapsed;
    // this.app.sidebar.isCollapsed = true;
  }

  logout() {
    localStorage.removeItem("userLoginToken");
    this.profileService.account.login = false;
    this.profileService.profile.username = "";
    this.profileService.profile.password = "";
    this.profileService.profile.firstName = "";
    this.profileService.profile.lastName = "";
    this.profileService.profile.email = "";
    this.profileService.profile.userImage = "";
    this.profileService.profile.rewards.rainbow = 0;
    this.profileService.profile.rewards.star = 0;
    this.profileService.profile.rewards.rainbows = [];
    this.profileService.profile.rewards.stars = [];
  }
}
