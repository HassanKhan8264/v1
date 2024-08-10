import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "v1-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input() tweets: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
