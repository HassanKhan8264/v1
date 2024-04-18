import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublishRoutingModule } from "./publish-routing.module";
// import { SharedModule } from "../shared/shared.module";
import { PublishSidebarComponent } from "./publish-sidebar/publish-sidebar/publish-sidebar.component";
import { PublishLayoutComponent } from "./publish-layout/publish-layout/publish-layout.component";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
// import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";
// import { SharedModule } from "../../shared/shared.module";
// import { PublishSidebarComponent } from "./publish-sidebar/publish-sidebar.component";
// import { MaterialModule } from "src/app/shared/modules/material.module";
// import { ContentSelectors } from "./features/content/store/content.selectors";
// import { CDK_DRAG_CONFIG } from "@angular/cdk/drag-drop";

// const services = [ContentSelectors];

// const DragConfig = {
//   dragStartThreshold: 0,
//   pointerDirectionChangeThreshold: 5,
//   zIndex: 10000001,
// };

@NgModule({
  declarations: [PublishLayoutComponent, PublishSidebarComponent],
  imports: [CommonModule, PublishRoutingModule, SharedModule,MaterialModule],
  // providers: [...services, { provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
  // providers: [...services, { provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
})
export class PublishModule {
  constructor() {}
}
