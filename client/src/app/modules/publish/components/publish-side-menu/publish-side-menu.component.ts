import { Component, OnInit } from "@angular/core";
import { EndpointService } from "src/app/core/http/endpoint.service";

@Component({
  selector: "v1-publish-side-menu",
  templateUrl: "./publish-side-menu.component.html",
  styleUrls: ["./publish-side-menu.component.scss"],
})
export class PublishSideMenuComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private endpoint: EndpointService) {}

  addccount() {
    let account = "facebook account";
    let item = localStorage.setItem("account", account);
  }
  onClick() {
    this.endpoint
      .user()
      .getAll()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
