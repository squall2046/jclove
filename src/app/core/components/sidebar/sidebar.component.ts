import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {
//   faCoffee, faQuestionCircle, faUser, faCog, faAngleDoubleLeft, faAngleDoubleRight, faChevronUp, faChevronDown
// } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidebar;
  @Output() sidebarCollapse = new EventEmitter();
  @Output() pageTitle = new EventEmitter();

  collapse = false;
  drop = false;
  dropA = false;

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



  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.sidebarCollapse.emit();
    // setTimeout(() => {
    this.collapse = !this.collapse;
    // }, 200);
  }

  toggleDrop(name) {
    this.drop = !this.drop;
    if (name === 'Administration') {
      this.dropA = !this.dropA;
    }
  }

  clickTab(name) {
    this.pageTitle.emit(name);
  }

}
