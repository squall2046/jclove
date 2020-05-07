import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeactivateGuard } from "src/app/shared/services/deactivate.guard";
import { AuthGuard } from "src/app/shared/services/auth.guard";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard, AuthGuard]
})
export class AuthRoutingModule { }
