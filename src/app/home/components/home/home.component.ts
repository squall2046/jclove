import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  profile: User;

  constructor(private userService: UserService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    // console.log(this.users);
    this.profile = this.profileService.profile;
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
