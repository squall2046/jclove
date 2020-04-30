import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { App } from 'src/app/app.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  app: App;

  // fa = {
  //   coffee: faCoffee,
  //   questionCircle: faQuestionCircle,
  //   user: faUser,
  //   cog: faCog,
  //   doubleLeft: faAngleDoubleLeft,
  //   doubleRight: faAngleDoubleRight,
  //   chevronUp: faChevronUp,
  //   chevronDown: faChevronDown
  // };

  constructor(private appService: AppService) { }

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
    // this.app.path = tab.path;

    this.app.sidebar.show = false;
  }

  clickSubTab(title) { }

}
