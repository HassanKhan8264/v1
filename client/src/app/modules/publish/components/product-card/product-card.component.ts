import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "v1-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input() tweets: any[] = [];
  text: { text: string }; // Define the type of 'text'

  constructor() {}

  ngOnInit(): void {
    this.text = {
      // Use '=' to assign the object
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    };
  }
}
