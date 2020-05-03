import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../profile/profile.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: User;
  // user: User[] = [];


  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.profile = this.profileService.profile;

    // this.profileService.getRewards().subscribe(res => {
    //   this.user = res;
    //   console.log(res);
    //   this.profileService.profile.rewards.rainbows = this.user[0].rewards.rainbows;
    //   this.profileService.profile.rewards.stars = this.user[0].rewards.stars;
    // });
  }

}
