import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { OnboardingService } from "../../shared/services/onboarding.service";

@Injectable({
  providedIn: "root",
})
export class onboardingGuard implements CanActivate {
  constructor(
    private _onBoardingService: OnboardingService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const toWelcomePage = this._onBoardingService.checkWelcomePageCondition();

    if (toWelcomePage) {
      this.router.navigate(["/main/welcome"]);
    } else {
      this.router.navigate(["/main/publish"]);
    }
    return true; // Allow navigation
  }
}
