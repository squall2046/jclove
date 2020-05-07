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

  loginCancel() { }
  loginSubmit() {
    // console.log(this.loginForm.dirty);
    // console.log(this.loginForm.get("username").value);
    // console.log(this.loginForm.value.username);
    this.authService.profile.userName = this.loginForm.value.username;
    this.authService.profile.password = this.loginForm.value.password;

    this.authService.getUser().subscribe((data: any) => {
      if (data) {
        localStorage.setItem("userLoginToken", data.token);
        this.router.navigate(["home"]);
        this.authService.setLoggedIn(true);

      } else {
        console.log(JSON.stringify(data));
        // window.alert(data);
      }

      this.loginForm.value.username = "";
      this.loginForm.value.password = "";
    })
  }
}
