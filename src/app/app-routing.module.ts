import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout/main-layout.component";
// import { environment } from "../environments/environment";
// import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
// import { PageNotFoundComponent } from "./shared/views/page-not-found/page-not-found.component";
// import { AuthenticationGuard } from "./core/guards/authentication.guard";
// import { TeamMemberGuard } from "./core/guards/team-member.guard";
// import { PermissionResolver } from "./core/resolvers/permission.resolver";
// import { ExternalAppResolver } from "./core/resolvers/external-app.resolver";
// import { DefaultViewComponent } from "./shared/views/default-view/default-view.component";
// import { Constants } from "./shared/services";
// import { FeatureGuard } from "./core/guards/feature.guard";
// import { OnBoardGuard } from "./core/guards/onboarding.guard";
// import { ComponentsViewComponent } from "./shared/views/components-view/components-view.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
    //   {
    //     path: "",
    //     canActivate: [OnBoardGuard],
    //     // data: { welcomePage: true },
    //     children: [],
    //   },
    //   {
    //     path: "welcome",
    //     pathMatch: "full",
    //     redirectTo:
    //       "publish/settings/manage-social-accounts/add-social-account",
    //     // canActivate: [],
    //     // data: { welcomePage: true },
    //     // loadChildren: () =>
    //     //   import("./modules/onboarding/onboarding.module").then(
    //     //     (m) => m.OnboardingModule,
    //     //   ),
    //   },
      {
        path: "publish",
        // data: { feature: "PUBLISH" },
        // canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./modules/publish/publish.module").then(
            (m) => m.PublishModule,
          ),
      },
    //   {
    //     path: "analytics",
    //     canActivate: [AuthenticationGuard, FeatureGuard],
    //     resolve: { permission: PermissionResolver },
    //     data: {
    //       featureAllowed: Constants.FEATURES_ALLOWED.Analytics,
    //       checkCount: true,
    //     },
    //     loadChildren: () =>
    //       import("./modules/analytics-v2/analytics-v2.module").then(
    //         (m) => m.AnalyticsV2Module,
    //       ),
    //   },
    //   {
    //     path: "calendar",
    //     canActivate: [AuthenticationGuard, FeatureGuard],
    //     resolve: { permission: PermissionResolver },
    //     data: {
    //       featureAllowed: Constants.FEATURES_ALLOWED.AllInOneCalendar,
    //       checkCount: true,
    //     },
    //     loadChildren: () =>
    //       import("./modules/calendar/calendar.module").then(
    //         (m) => m.CalendarModule,
    //       ),
    //   },
    //   {
    //     path: "engage",
    //     canActivate: [AuthenticationGuard, TeamMemberGuard],
    //     resolve: { permission: PermissionResolver },
    //     data: {
    //       feature: "ENGAGE",
    //       permissions: [Constants.PERMISSIONS.MANAGE_ENGAGE],
    //     },
    //     loadChildren: () =>
    //       import("./modules/engage/engage.module").then((m) => m.EngageModule),
    //   },
    //   // {
    //   //   path: "sc-components",
    //   //   canActivate: [AuthenticationGuard],
    //   //   component: ComponentsViewComponent,
    //   // },
    //   {
    //     path: "team",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "TEAM",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Team,
    //       permissions: [Constants.PERMISSIONS.MANAGE_TEAM],
    //     },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "login",
    //     data: { feature: "LOGIN" },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "pricing",
    //     canActivate: [TeamMemberGuard],
    //     data: {
    //       feature: "PRICING",
    //       changeAccountMessage: true,
    //       permissions: ["DUMMY"],
    //     },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "settings-account",
    //     canActivate: [TeamMemberGuard],
    //     data: {
    //       feature: "ACCOUNT_SETTINGS",
    //       changeAccountMessage: true,
    //       permissions: ["DUMMY"],
    //     },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "settings-billing",
    //     canActivate: [TeamMemberGuard],
    //     data: {
    //       feature: "BILLING_SETTINGS",
    //       changeAccountMessage: true,
    //       permissions: ["DUMMY"],
    //     },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "settings-notification",
    //     data: { feature: "NOTIFICATIONS_SETTINGS" },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "**",
    //     component: PageNotFoundComponent,
    //   },
    ],
  },
];

// const config: any = {
//   //   enableTracing: environment.debug,
//   preloadingStrategy: PreloadAllModules,
//   relativeLinkResolution: "legacy",
// };

@NgModule({
  // imports: [RouterModule.forRoot(routes, config)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
