import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Ensure that tslib is imported correctly
// Ensure that tslib is imported correctly

import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { CalenderLayoutComponent } from "./calender-layout/calender-layout.component";
import { CalenderRoutingModule } from "./calender-routing.module";

@NgModule({
  declarations: [CalenderLayoutComponent],
  imports: [CommonModule, CalenderRoutingModule, SharedModule, MaterialModule],
  // providers: [...services, { provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
  // providers: [...services, { provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
})
export class CalenderModule {
  constructor() {}
}
