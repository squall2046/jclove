import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JClove';
  header = {
    title: 'JClove',
    logo: './../assets/images/logo/logo.png',
    route: {
      profile: '/profile',
      settings: '/settings',
      activity: '/activity',
      logout: '/logout',
    },
    user: {
      name: 'Joanna',
      img: './../assets/images/logo/logo-circle.png'
    }
  };

  footer = {
    logo: './../assets/images/logo/logo2-transparent.png',
    copyright: '2020 Isaac Wu',
    content: 'footer',
    message: ''
  };

  chat = {};

  sidebar = {
    show: false,
    isCollapsed: false,
    tabs: [
      {
        name: 'Home',
        path: '/home',
        icon: 'fa-home',
        level: 1,
        subTabs: []
      },
      {
        name: 'Math',
        path: '/math',
        icon: 'fa-folder',
        level: 1,
        subTabs: []
      },
      {
        name: 'Mandarin',
        path: '/mandarin',
        icon: 'fa-inbox',
        level: 1,
        subTabs: []
      },
      {
        name: 'English',
        path: '/english',
        icon: 'fa-inbox',
        level: 1,
        subTabs: []
      },
      // {
      //   name: 'Administration',
      //   path: '',
      //   icon: 'fa-cog',
      //   level: 1,
      //   subTabs: [
      //     {
      //       name: 'User Management',
      //       path: '/user-management',
      //       level: 2,
      //       subTabs: []
      //     },
      //     {
      //       name: 'Company Settings',
      //       path: '/company-settings',
      //       level: 2,
      //       subTabs: []
      //     },
      //   ]
      // },
    ],
  };

  constructor(
  ) { }

  ngOnInit(): void {
  }

  sidebarCollapse() {
    this.sidebar.isCollapsed = !this.sidebar.isCollapsed;
  }

  sidebarShow() {
    this.sidebar.show = !this.sidebar.show;
  }

  newTitle(title) {
    console.log(title);
    this.title = title;
  }

  showSidebar() {
    this.sidebar.show = !this.sidebar.show;
  }
}
