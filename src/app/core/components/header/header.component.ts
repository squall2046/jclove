import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { App } from 'src/app/app.model';
import { AuthService } from 'src/app/auth/auth.service';

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

  showSettings = true;
  showNotifications = true;
  showHelp = true;

  user: User[] = [];

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.app = this.appService.app;
  }

  toggleSidebarInPhoneApp() {
    this.app.sidebar.show = !this.app.sidebar.show;
    // this.app.sidebar.isCollapsed = !this.app.sidebar.isCollapsed;
    // this.app.sidebar.isCollapsed = true;
  }


  logout() {
    localStorage.removeItem("userLoginToken");
    this.authService.isLoggedIn = false;
  }
}
