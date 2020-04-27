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
    this.app = this.appService.app
  }

  backTo(path) {
    switch (path) {
      case "math":
        this.router.navigate(['/math'])
        break;
      case "english":
        this.router.navigate(['/english'])
        break;
      case "mandarin":
        this.router.navigate(['/mandarin'])
        break;
      case "quiz":
        this.router.navigate(['/quiz'])
        break;
    }
    this.app.path = "";
  }
}
