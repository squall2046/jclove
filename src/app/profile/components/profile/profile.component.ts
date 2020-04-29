import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  starArr = [];
  rainbowArr = [];

  constructor(
    private profileService: ProfileService,

  ) { }

  ngOnInit(): void {
    this.profile = this.profileService.profile;
    this.starArr = this.profileService.rewards.stars;
    this.rainbowArr = this.profileService.rewards.rainbows;
  }

}
