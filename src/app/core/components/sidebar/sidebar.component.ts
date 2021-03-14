import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  app: App;

  constructor(
    private router: Router,
    private appService: AppService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.app = this.appService.app;
  }

  toggleCollapse() {
    this.app.sidebar.isCollapsed = !this.app.sidebar.isCollapsed;
  }

  toggleDrop(name) {
    this.app.sidebar.drop = !this.app.sidebar.drop;
  }

  clickTab(tab) {
    this.app.main.headIcon = tab.icon;
    this.app.main.headText = tab.name;
    this.app.sidebar.show = false;

    this.router.navigate([tab.path]);

    if (tab.name === "Ranking") {
      // this.userService.rankingEvent();
      this.initialUsers();
    }
  }
  clickSubTab(title) { }

  initialUsers() {
    this.userService.getUsers().subscribe(res => {
      this.userService.users = res;
    });
  }

}
