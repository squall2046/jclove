import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { App } from './app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  app: App;
  constructor(
    private appService: AppService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.app = this.appService.app;
    this.setbackTo();
  }

  setbackTo() {
    setTimeout(() => {
      const path = this.router.url;

      switch (path) {
        case "/math":
          this.app.main.headIcon = "iso";
          this.app.main.headText = "Math";
          break;
        case "/english":
          this.app.main.headIcon = "explicit";
          this.app.main.headText = "English";
          break;
        case "/mandarin":
          this.app.main.headIcon = "translate";
          this.app.main.headText = "Mandarin";
          break;
        case "/quiz":
          this.app.main.headIcon = "menu_book";
          this.app.main.headText = "Quiz";
          break;
        case "/profile":
          this.app.main.headIcon = "face";
          this.app.main.headText = "Profile";
          break;
      }

      if (path === "/math/units" || path === "/math/tens" || path === "/math/theory") {
        this.app.path = "/math";
        this.app.main.headIcon = "iso";
        this.app.main.headText = path;
      }
    });
  }

  backTo() {
    switch (this.app.path) {
      case "/math":
        this.router.navigate(['/math']);
        this.app.main.headIcon = "iso";
        this.app.main.headText = "math";
        break;
      case "/english":
        this.router.navigate(['/english']);
        this.app.main.headIcon = "iso";
        this.app.main.headText = "english";
        break;
      case "/mandarin":
        this.router.navigate(['/mandarin']);
        this.app.main.headIcon = "iso";
        this.app.main.headText = "mandarin";
        break;
      case "/quiz":
        this.router.navigate(['/quiz']);
        this.app.main.headIcon = "";
        this.app.main.headText = "";
        break;
    }
    this.app.path = "";
  }
}
