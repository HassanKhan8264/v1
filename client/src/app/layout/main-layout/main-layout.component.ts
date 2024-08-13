import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "v1-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // List of routes where the header should be hidden
        const noHeaderRoutes = ["/pages/login", "/pages/signup"];
        // Normalize the URL
        const currentUrl = event.urlAfterRedirects.split("?")[0];
        this.showHeader = !noHeaderRoutes.includes(currentUrl);
      }
    });

    // Initial check
    this.checkInitialRoute();
  }

  private checkInitialRoute(): void {
    const noHeaderRoutes = ["/pages/login", "/pages/signup"];
    const currentUrl = this.router.url.split("?")[0];
    this.showHeader = !noHeaderRoutes.includes(currentUrl);
  }
}
