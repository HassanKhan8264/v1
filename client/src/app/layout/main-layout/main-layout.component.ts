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
        this.showHeader = !noHeaderRoutes.includes(event.url);
      }
    });
  }
}
