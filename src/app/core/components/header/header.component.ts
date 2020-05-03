import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { App } from 'src/app/app.model';

import { ProfileService } from '../../../profile/profile.service';
import { User } from '../../../shared/models/user.model';

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

}
