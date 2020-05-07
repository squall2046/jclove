import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';


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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginCancel() {
    this.validName = true;
    this.validPassword = true;

    this.loginForm.controls.username.setValue("");
    this.loginForm.controls.password.setValue("");
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
      this.authService.getUser(username, password).subscribe((data: any) => {
        if (data.success) {
          console.log(JSON.stringify(data));
          localStorage.setItem("userLoginToken", data.token);
          this.router.navigate(["home"]);
          this.authService.setLoggedIn(true);
          this.validName = true;
          this.validPassword = true;
        } else {
          console.log(JSON.stringify(data));
          this.validName = false;
          this.validPassword = false;
        }
      })
    }
  }
}
