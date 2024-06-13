import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../../core/http/profile.service";
import { Router } from "@angular/router";
@Component({
  selector: "cl-splash",
  templateUrl: "./splash.component.html",
  styleUrl: "./splash.component.scss",
})
export class SplashComponent implements OnInit {
  showLogo = false;
  constructor(private profile: ProfileService, private router: Router) {}
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    setTimeout(() => {
      this.showLogo = true;
      setTimeout(async () => {
        this.profile.loggedIn().subscribe((response: any) => {
          if (response.authenticated) {
            this.router.navigate(["/main/publish"]); // Redirect to dashboard if authenticated
          } else {
            this.router.navigate(["/login"]); // Redirect to login if not authenticated
          }
        });
      }, 3000);
    }, 1000);
  }
}
