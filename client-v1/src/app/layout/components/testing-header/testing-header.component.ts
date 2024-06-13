import { Component, OnInit } from "@angular/core";
import { EndpointService } from "../../../core/http/endpoint.service";

@Component({
  selector: "cl-testing-header",
  templateUrl: "./testing-header.component.html",
  styleUrl: "./testing-header.component.scss",
})
export class TestingHeaderComponent implements OnInit {
  constructor(private endpoint: EndpointService) {}

  ngOnInit(): void {
    this.openDialog();
  }
  openDialog(): void {
    this.endpoint
      .user()
      .getAll()
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
