import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OnboardingService {
  constructor() {}
  checkWelcomePageCondition() {
    let account = localStorage.getItem("account");
    return !!account;
  }
}
