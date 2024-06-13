import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { MainLayoutComponent } from "./layout/components/main-layout/main-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { SplashComponent } from "./shared/components/splash/splash.component";
import { onboardingGuard } from "./core/guards/onboarding.guard";

// Optimize lazy loading by splitting into smaller modules
const routes: Routes = [
  {
    path: "", // Root path
    redirectTo: "splash", // Redirect to splash screen
    pathMatch: "full",
  },
  {
    path: "splash",
    component: SplashComponent,
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
    path: "main",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        canActivate: [onboardingGuard],
        children: [
          {
            path: "welcome",
            redirectTo: "publish/welcome",
            pathMatch: "full",
          },
          {
            path: "publish",
            canActivate: [AuthGuard],
            loadChildren: () =>
              import("./modules/publish/publish.module").then(
                (m) => m.PublishModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
