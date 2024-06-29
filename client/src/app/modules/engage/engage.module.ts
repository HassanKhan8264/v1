import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { EngageRoutingModule } from "./engage-routing.module";

@NgModule({
  imports: [CommonModule, EngageRoutingModule, SharedModule],
})
export class EngageModule {}
