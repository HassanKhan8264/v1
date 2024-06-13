import { MaterialModule } from "./../shared/modules/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { MainLayoutComponent } from "./main-layout/main-layout.component";
// import { HeaderComponent } from "./components/header/header.component";
// import { FooterComponent } from "./components/footer/footer.component";
// import { NotificationBarComponent } from "./components/notification-bar/notification-bar.component";
import { SharedModule } from "../shared/shared.module";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { TestingHeaderComponent } from "./components/testing-header/testing-header.component";
// import { SidenavPrimaryComponent } from "./components/sidenav-primary/sidenav-primary.component";
// import { NotificationsModule } from "../modules/notifications/notifications.module";
// import { FeatureAnnouncementComponent } from "./components/feature-announcement/feature-announcement.component";

@NgModule({
  declarations: [MainLayoutComponent, TestingHeaderComponent],
  // imports: [CommonModule, SharedModule, NotificationsModule],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class LayoutModule {}
