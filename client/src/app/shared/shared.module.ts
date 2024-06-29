import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { SplashComponent } from "./components/splash/splash.component";
import { PublishLayoutComponent } from "../modules/publish/publish-layout/publish-layout.component";
import { PublishSideMenuComponent } from "../modules/publish/components/publish-side-menu/publish-side-menu.component";
import { AddTaskComponent } from "../modules/publish/components/add-task/add-task.component";
import { MainLayoutComponent } from "../layout/main-layout/main-layout.component";
import { HeaderComponent } from "../layout/components/header/header.component";
import { EngagementComponent } from "../modules/engage/engagement/engagement.component";
import { ContentComponent } from "../modules/publish/components/content-comp/content.component";

const components = [
  SignupComponent,
  LoginComponent,
  SplashComponent,
  PublishLayoutComponent,
  PublishSideMenuComponent,
  AddTaskComponent,
  MainLayoutComponent,
  HeaderComponent,
  EngagementComponent,
  ContentComponent,
];

// const services = [];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,

    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    ...components,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
