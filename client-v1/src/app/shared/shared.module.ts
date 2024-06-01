import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";

const components = [SignupComponent, LoginComponent];

const services = [AuthService];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,

    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [...services],
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
      providers: [...services],
    };
  }
}
