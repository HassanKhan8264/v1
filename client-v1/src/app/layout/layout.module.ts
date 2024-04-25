import { FeatureAnnouncmentComponent } from './components/feature-announcment/feature-announcment.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { MainLayoutComponent } from "./main-layout/main-layout.component";
// import { HeaderComponent } from "./components/header/header.component";
// import { FooterComponent } from "./components/footer/footer.component";
// import { NotificationBarComponent } from "./components/notification-bar/notification-bar.component";
import { SharedModule } from "../shared/shared.module";
// import { SidenavPrimaryComponent } from "./components/sidenav-primary/sidenav-primary.component";
// import { NotificationsModule } from "../modules/notifications/notifications.module";
// import { FeatureAnnouncementComponent } from "./components/feature-announcement/feature-announcement.component";
import { MainLayoutComponent } from "./main-layout/main-layout/main-layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotificationBarComponent } from "./components/notification-bar/notification-bar.component";
import { SidenavPrimaryComponent } from "./components/sidenav-primary/sidenav-primary.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    NotificationBarComponent,
    SidenavPrimaryComponent,
    FeatureAnnouncmentComponent,
  ],
  // imports: [CommonModule, SharedModule, NotificationsModule],
  imports: [CommonModule, SharedModule],
})
export class LayoutModule { }
