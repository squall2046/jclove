import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { App } from 'src/app/app.model';

import { AuthService } from 'src/app/shared/services/auth.service';
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

  constructor(
    private appService: AppService,
    public authService: AuthService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.app = this.appService.app;
    this.profile = this.profileService.profile;
  }

  toggleSidebarInPhoneApp() {
    this.app.sidebar.show = !this.app.sidebar.show;
    // this.app.sidebar.isCollapsed = !this.app.sidebar.isCollapsed;
    // this.app.sidebar.isCollapsed = true;
  }

  logout() {
    // localStorage.removeItem("userLoginToken");
    localStorage.removeItem("authToken");
    // this.profileService.account.login = false;
    this.authService.logout();
    this.profileService.profile = {
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
  }
}
