import { Injectable } from '@angular/core';
import { App } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  app: App = {
    phoneApp: false,
    path: "",
    header: {
      headIcon: 'face',
      headText: 'JClove',
      logo: './../assets/images/logo/logo.png',
      route: {
        profile: '/profile',
        settings: '/settings',
        activity: '/activity',
        logout: '/logout',
      },
      user: {
        name: 'Joanna',
        img: './../assets/images/logo/joanna.jpg',
      }
    },
    main: {
      headIcon: 'face',
      headText: 'JClove',
    },
    footer: {
      logo: './../assets/images/logo/logo2-transparent.png',
      copyright: '',
      content: 'footer',
      message: 'For my girls Joanna&Chloe'
    },
    sidebar: {
      show: false,
      drop: false,
      isCollapsed: false,
      tabs: [
        {
          name: 'Home',
          path: '/home',
          icon: 'home',
          level: 1,
          subTabs: []
        },
        {
          name: 'Math',
          path: '/math',
          icon: 'iso',
          level: 1,
          subTabs: []
        },
        {
          name: 'English',
          path: '/english',
          icon: 'explicit',
          level: 1,
          subTabs: []
        },
        {
          name: 'Mandarin',
          path: '/mandarin',
          icon: 'translate',
          level: 1,
          subTabs: []
        },
      ],
    },
    chat: {},
  }
  constructor() {
    this.app.footer.copyright = "©Copyright " + new Date().getFullYear() + " Isaac All Rights Reserved"
  }

}
