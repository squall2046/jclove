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

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.getUpdatedProfile();
  }

  getUpdatedProfile() {
    this.profileService.postProfile().subscribe(res => {
      this.profileService.profile = { ...res[0] };
      this.profile = this.profileService.profile;
      console.log(this.profile);
    });
  };
}
