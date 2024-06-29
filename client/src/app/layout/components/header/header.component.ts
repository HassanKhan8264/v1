import { Component, OnInit } from "@angular/core";
import { EndpointService } from "../../../core/http/endpoint.service";
import { Router } from "@angular/router";

@Component({
  selector: "v1-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private endpoint: EndpointService,
    private router: Router,
  ) {}

  ngOnInit(): void {}
  logout() {
    this.endpoint
      .user()
      .logout()
      .subscribe({
        next: () => {
          this.router.navigate(["splash"]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
