import { MaterialModule } from "./../shared/modules/material.module";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./interceptors/token-interceptor.service";

const service = [];
@NgModule({
  declarations: [],
  providers: [
    ...service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  // imports: [CommonModule, SharedModule, NotificationsModule],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only",
      );
    }
  }
}
