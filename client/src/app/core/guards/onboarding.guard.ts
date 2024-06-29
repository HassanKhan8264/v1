import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { OnboardingService } from "src/app/shared/services/onboarding.service";

@Injectable({
  providedIn: "root",
})
export class OnboardingGuard implements CanActivate {
  constructor(
    private _onBoardingService: OnboardingService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const toWelcomePage = this._onBoardingService.checkWelcomePageCondition();
    if (!toWelcomePage) {
      return this.router.createUrlTree(["/pages/welcome"]);
    } else {
      return this.router.createUrlTree(["/pages/publish/addTask"]);
    }
  }
}
