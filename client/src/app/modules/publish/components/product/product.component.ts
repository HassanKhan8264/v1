import { EndpointService } from "./../../../../core/http/endpoint.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "v1-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(private http: HttpClient) {}
  products: any[];
  ngOnInit() {
    this.http
      .get("https://fakestoreapi.com/products", { withCredentials: false })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
