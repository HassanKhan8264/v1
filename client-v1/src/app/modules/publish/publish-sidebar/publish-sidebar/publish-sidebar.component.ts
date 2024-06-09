import { Component, Input } from "@angular/core";

@Component({
  selector: "cl-publish-sidebar",
  templateUrl: "./publish-sidebar.component.html",
  styleUrl: "./publish-sidebar.component.scss",
})
export class PublishSidebarComponent {
  @Input() navList: any;
}
