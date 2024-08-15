import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptor/auth.interceptor";
import { SharedModule } from "../shared/shared.module";
import { StoreModule, Store } from "@ngrx/store";
import { counterReducer } from "./store/states/counter/counter.reducer";
import { AuthReducer } from "./store/states/auth/auth.reducer";
import { AuthEffects } from "./store/states/auth/auth.effects";
import { EffectsModule } from "@ngrx/effects";
import { AUTHENTICATION } from "./store/states/auth/auth.selector";
const service = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature({ name: "counter", reducer: counterReducer }),
    StoreModule.forFeature(AUTHENTICATION, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    ...service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
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
