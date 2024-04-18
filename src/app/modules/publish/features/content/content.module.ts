import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// import { ContentRoutingModule } from "./content-routing.module";
// import { reducers as ContentReducers } from './store/content.reducers';
// import { CONTENT_FEATURE_KEY } from './store/content.selectors';
// import { SharedModule } from "../../../../shared/shared.module";
// import { MaterialModule } from "../../../../shared/modules/material.module";
// import { EffectsModule } from '@ngrx/effects';
// import { ContentEffects } from './store/content.effects';
// import { ContentComponentModule } from "./content-component.module";
// import { MaterialModule } from "../../shared/modules/material.module";
// import { SharedModule } from "../../shared/shared.module";
// import { ContentComponentModule } from "./content-component.module";
import { ContentRoutingModule } from "./content-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { MaterialModule } from "../../../../shared/modules/material.module";
import { ContentComponentModule } from "./content-component.module";
// import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
// import { CanvaDialogComponent } from "./components/canva-dialog/canva-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContentComponentModule,
    ContentRoutingModule,
    MaterialModule,
  ],
  providers: [
    // { provide: MAT_DIALOG_DATA, useValue: {} },
    // { provide: MatDialogRef, useValue: {} },
  ],
  // declarations: [CanvaDialogComponent],
})
export class ContentModule {}
