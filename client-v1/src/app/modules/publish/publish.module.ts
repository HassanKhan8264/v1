import { NgModule } from "@angular/core";
import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from "@angular/common";
import { PublishRoutingModule } from "./publish-routing.module";

@NgModule({
  declarations: [PublishLayoutComponent],
  imports: [CommonModule, PublishRoutingModule, SharedModule],
})
export class PublishModule {}
