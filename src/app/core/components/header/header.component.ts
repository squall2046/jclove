import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { App } from 'src/app/app.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  app: App;

  @Output() showSidebar = new EventEmitter();

  showSettings = true;
  showNotifications = true;
  showHelp = true;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.app = this.appService.app;
  }

  toggleSidebarInPhoneApp() {
    this.app.sidebar.show = !this.app.sidebar.show;
    // this.app.sidebar.isCollapsed = !this.app.sidebar.isCollapsed;
  }
}
