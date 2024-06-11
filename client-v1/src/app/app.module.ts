import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
  HttpClientModule,
} from "@angular/common/http";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";
import { RouterModule } from "@angular/router";
import { TokenInterceptorService } from "./core/interceptors/token-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule.forRoot(),
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  // providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
