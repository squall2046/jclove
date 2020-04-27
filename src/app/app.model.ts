export class App {
  phoneApp: boolean;
  header: {
    headIcon: string;
    headText: string;
    logo: string;
    route: {
      profile: string,
      settings: string,
      activity: string,
      logout: string,
    };
    user: {
      name: string,
      img: string,
    }
  };
  main: {
    headIcon: string;
    headText: string;
  };
  footer: {
    logo: string,
    copyright: string,
    content: string,
    message: string,
  };
  sidebar: {
    show: boolean,
    drop: boolean,
    isCollapsed: boolean,
    tabs: Tab[],
  };
  chat: {};
}

export class Tab {
  name: string;
  path: string;
  icon: string;
  level: number;
  subTabs?: []
}