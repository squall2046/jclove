import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { ProfileService } from "../../profile/profile.service"

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private profileService: ProfileService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.profileService.account.login === true) {
      return true;
    } else {
      this.router.navigate(["login"]);
      this.profileService.account.login = false;
    }
  }
}
