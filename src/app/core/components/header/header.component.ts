import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { faCoffee, faQuestionCircle, faUser, faCog, faTimes, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() header: any;
  @Output() showSidebar = new EventEmitter();

  // fa = {
  //   coffee: faCoffee,
  //   questionCircle: faQuestionCircle,
  //   user: faUser,
  //   cog: faCog,
  //   times: faTimes,
  //   check: faClipboardCheck
  // };

  sidebarInTablet = false;
  showSettings = true;
  showNotifications = true;
  showHelp = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.showSidebar.emit();
    this.sidebarInTablet = !this.sidebarInTablet;
  }

}
