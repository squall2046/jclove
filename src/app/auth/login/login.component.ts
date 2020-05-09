import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/profile/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  path = "/register";
  validName = true;
  validPassword = true;

  profile: User = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    userImage: '',
    rewards: {
      star: 0,
      rainbow: 0,
      stars: [],
      rainbows: [],
    }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private profileService: ProfileService,
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginCancel() {
    this.loginForm.controls.username.setValue("");
    this.loginForm.controls.password.setValue("");

    this.validName = true;
    this.validPassword = true;
  }
  loginSubmit() {
    // console.log(this.loginForm.dirty);
    // console.log(this.loginForm.get("username").value);
    // console.log(this.loginForm.value.username);
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (!username || !password) {
      this.validName = false;
      this.validPassword = false;
    }
    if (username && password) {
      this.profileService.getUser(username, password).subscribe((data: any) => {
        if (data.success) {
          console.log(JSON.stringify(data));
          this.validName = true;
          this.validPassword = true;
          this.profileService.account.login = true;
          this.profileService.profile.username = data.user.username;
          this.profileService.profile.password = data.user.password;
          this.profileService.profile.firstName = data.user.firstName;
          this.profileService.profile.lastName = data.user.lastName;
          this.profileService.profile.email = data.user.email;
          this.profileService.profile.userImage = data.user.userImage;
          this.profileService.profile.rewards.rainbow = data.user.rewards.rainbow;
          this.profileService.profile.rewards.star = data.user.rewards.star;
          this.profileService.profile.rewards.rainbows = data.user.rewards.rainbows;
          this.profileService.profile.rewards.stars = data.user.rewards.stars;
          localStorage.setItem("userLoginToken", data.token);
          this.router.navigate(["home"]);
        } else {
          console.log(JSON.stringify(data));
          this.validName = false;
          this.validPassword = false;
          // this.profileService.account.login = false;
          // this.profileService.profile.username = "";
          // this.profileService.profile.password = "";
          // this.profileService.profile.firstName = "";
          // this.profileService.profile.lastName = "";
          // this.profileService.profile.email = "";
          // this.profileService.profile.userImage = "";
          // this.profileService.profile.rewards.rainbow = 0;
          // this.profileService.profile.rewards.star = 0;
          // this.profileService.profile.rewards.rainbows = [];
          // this.profileService.profile.rewards.stars = [];
        }
      })
    }
  }
}
