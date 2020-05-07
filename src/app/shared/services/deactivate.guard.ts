import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "../../auth/login/login.component";

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

@Injectable({ providedIn: "root" })
export class DeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    loginComponent: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (loginComponent.loginForm.dirty && !localStorage.getItem("userLoginToken")) {
      return confirm("Are you sure to discard changes?");
    } else {
      return true;
    }
  }
}
