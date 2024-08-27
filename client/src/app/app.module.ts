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
import { CoreModule } from "./core/core.module";
import { MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment.prod";
// import { metaReducers, reducers } from "./app.store";
import { counterReducer } from "./core/store/states/counter/counter.reducer";
import { EffectsModule } from "@ngrx/effects";
// import { metaReducers, reducers } from "./app.store";
import { hydrationMetaReducer } from "./core/store/states/hyderationAuth.reducer";
import { hydrationCounterMetaReducer } from "./core/store/states/hyderationCounter.reducer";
export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer,
  hydrationCounterMetaReducer,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({}, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    // Conditionally include StoreDevtoolsModule
    StoreDevtoolsModule.instrument(),
    CoreModule,
    SharedModule.forRoot(),
    LayoutModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
