import { Injectable } from '@angular/core';
import { App } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  app: App = {
    phoneApp: false,
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
      copyright: '2020 Isaac Wu',
      content: 'footer',
      message: ''
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
  constructor() { }
}
