import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/profile/profile.service';
import { AuthService } from 'src/app/shared/services/auth.service';
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
    private authService: AuthService,
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
      this.authService.loginInfo = {
        username: username,
        password: password
      }
      this.authService.getToken().subscribe((data: any) => {
        // console.log(JSON.stringify(data));
        if (data.success) {
          this.validName = true;
          this.validPassword = true;
          console.log(data);
          // this.profileService.profile = { ...data.user };
          // this.profileService.profile = data.user;
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
          console.log(this.profileService.profile);

          localStorage.setItem("authToken", JSON.stringify({ ...data }));
          this.authService.login();
          this.router.navigate(["/home"]);
        } else {
          this.validName = false;
          this.validPassword = false;
          this.authService.logout();
        }
      })
    }
  }
}
