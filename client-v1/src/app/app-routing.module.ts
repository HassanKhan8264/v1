import { AuthGuard } from "./core/guards/auth.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout/main-layout.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
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
      {
        path: "",
        redirectTo: "/publish",
        pathMatch: "full",
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
      },
      {
        path: "publish",
        // data: { feature: "PUBLISH" },
        loadChildren: () =>
          import("./modules/publish/publish.module").then(
            (m) => m.PublishModule
          ),
      },
      {
        path: "calender",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./modules/calender/calender.module").then(
            (m) => m.CalenderModule
          ),
      },
      // Other routes...
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
