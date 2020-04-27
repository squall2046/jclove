import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { App } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  app: App;
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.app = this.appService.app
  }
}
