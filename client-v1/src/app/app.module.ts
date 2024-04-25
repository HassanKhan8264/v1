import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // NgRx
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   },
    // }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    // EffectsModule.forRoot([]),

    // App
    // CoreModule,
    SharedModule.forRoot(),
    LayoutModule,

    // ToastrModule.forRoot({
    //   progressBar: true,
    //   closeButton: false,
    //   timeOut: 3000,
    //   tapToDismiss: false,
    //   maxOpened: 5,
    //   autoDismiss: true,
    //   toastComponent: ToastrComponent,
    // }),
  ],
  // providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
