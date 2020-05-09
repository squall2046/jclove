import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/profile/profile.service';
import { User } from 'src/app/shared/models/user.model';

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
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      firstname: [''],
      lastname: [''],
      email: [''],
    });
  }

  registerCancel() {
    this.registerForm.controls.username.setValue("");
    this.registerForm.controls.password.setValue("");
    this.registerForm.controls.repassword.setValue("");
    this.registerForm.controls.firstname.setValue("");
    this.registerForm.controls.lastname.setValue("");
    this.registerForm.controls.email.setValue("");

    this.newUsername = true;
    this.matchPassword = true;
  }
  registerSubmit() {
    // console.log(this.registerForm.dirty);
    // console.log(this.registerForm.get("username").value);
    // console.log(this.registerForm.value.username);
    console.log(this.registerForm.value);

    // 1. first, check password matching in client side.
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const repassword = this.registerForm.value.repassword;
    if (password.length > 0 && password === repassword) {
      this.matchPassword = true;

      // 2. if match, then send username to server, check unique.
      if (username.length > 0) {
        this.profileService.createUsername(this.registerForm.value).subscribe((data: any) => {
          console.log(JSON.stringify(data));
          if (data.newUser) {
            this.newUsername = true;
            this.router.navigate(["home"]);
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
