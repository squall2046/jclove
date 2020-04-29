import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    // console.log(this.users);
  }

  checkUserCard() { }

  getInitials(fN, lN) {
    if (fN && lN) {
      const firstName = fN && fN !== '' ? fN[0] : '';
      const lastName = lN && lN !== '' ? lN[0] : '';
      return firstName + ' ' + lastName;
    }
  }
}
