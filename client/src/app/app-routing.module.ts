import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplashComponent } from "./shared/components/splash/splash.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { OnboardingGuard } from "./core/guards/onboarding.guard";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { NotfoundComponent } from "./shared/components/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "splash",
    pathMatch: "full",
  },
  {
    path: "splash",
    component: SplashComponent,
  },
  {
    path: "pages",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        canActivate: [OnboardingGuard],
        children: [],
      },
      {
        path: "welcome",
        pathMatch: "full",
        redirectTo: "/pages/publish/addTask",
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
        loadChildren: () =>
          import("./modules/publish/publish.module").then(
            (m) => m.PublishModule,
          ),
      },
      {
        path: "engage",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./modules/engage/engage.module").then((m) => m.EngageModule),
      },
      {
        path: "",
        redirectTo: "/pages/publish",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "**",
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
