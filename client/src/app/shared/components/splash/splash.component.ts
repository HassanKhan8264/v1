import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../../core/http/profile.service";
import { Router } from "@angular/router";
@Component({
  selector: "v1-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"],
})
export class SplashComponent implements OnInit {
  showLogo = false;
  constructor(
    private profile: ProfileService,
    private router: Router,
  ) {}
  // ngOnInit() {
  //   this.initialize();
  // }
  // initialize() {
  //   setTimeout(() => {
  //     this.showLogo = true;
  //     this.profile.loggedIn().subscribe({
  //       next: (response: any) => {
  //         console.log(response);
  //         if (response.authenticated) {
  //           console.log("Navigating to /pages/publish");
  //           this.router.navigate(["/pages"]).then((navigated) => {
  //             if (navigated) {
  //               console.log("Navigation to /pages/publish successful");
  //             } else {
  //               console.log("Navigation to /pages/publish failed");
  //             }
  //           });
  //         } else {
  //           console.log("Navigating to /login");
  //           this.router.navigate(["/login"]).then((navigated) => {
  //             if (navigated) {
  //               console.log("Navigation to /login successful");
  //             } else {
  //               console.log("Navigation to /login failed");
  //             }
  //           });
  //         }
  //       },
  //       error: (error) => {
  //         console.error("Error checking authentication status:", error);
  //         console.log("Navigating to /login due to error");
  //         this.router.navigate(["/login"]).then((navigated) => {
  //           if (navigated) {
  //             console.log("Navigation to /login successful");
  //           } else {
  //             console.log("Navigation to /login failed");
  //           }
  //         });
  //       },
  //     });
  //   }, 1000);
  // }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("Navigating to /pages/publish");
      this.router.navigate(["/pages"]).then((navigated) => {
        if (navigated) {
          console.log("Navigation to /pages/publish successful");
        } else {
          console.log("Navigation to /pages/publish failed");
        }
      });
    }, 3000); // 3 seconds delay
  }
}
