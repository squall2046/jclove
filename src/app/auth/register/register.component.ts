import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  path = "/login";
  newUsername = true;
  matchPassword = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private profileService: ProfileService,
  ) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      email: [''],
    });
  }

  registerCancel() {
    // this.registerForm.controls.username.setValue("");
    // this.registerForm.controls.password.setValue("");
    // this.registerForm.controls.rePassword.setValue("");
    // this.registerForm.controls.firstName.setValue("");
    // this.registerForm.controls.lastName.setValue("");
    // this.registerForm.controls.email.setValue("");
    this.registerForm.reset();
    this.newUsername = true;
    this.matchPassword = true;
  }
  registerSubmit() {
    // console.log(this.registerForm.dirty);
    // console.log(this.registerForm.get("username").value);
    // console.log(this.registerForm.value.username);
    console.log(this.registerForm.value);

    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const rePassword = this.registerForm.value.rePassword;
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const email = this.registerForm.value.email;

    this.profileService.profile.username = username;
    this.profileService.profile.password = password;
    this.profileService.profile.firstName = firstName;
    this.profileService.profile.lastName = lastName;
    this.profileService.profile.email = email;
    this.profileService.profile.userImage = '../../../assets/images/logo/placeholder1.png';
    this.profileService.profile.rewards.star = 0;
    this.profileService.profile.rewards.rainbow = 0;
    this.profileService.profile.rewards.stars = [];
    this.profileService.profile.rewards.rainbows = [];

    // 1. first, check password matching in client side.
    if (password.length > 0 && password === rePassword) {
      this.matchPassword = true;

      // 2. if match, then send username to server, check unique.
      if (username.length > 0) {
        this.profileService.createUsername(this.profileService.profile).subscribe((data: any) => {
          console.log(JSON.stringify(data));
          if (data.newUser) {
            this.newUsername = true;
            this.router.navigate(["/home"]);
          } else {
            this.newUsername = false;
          }
        })
      } else {
        this.newUsername = false;
      }
    } else {
      this.matchPassword = false;
    }
  }
}
