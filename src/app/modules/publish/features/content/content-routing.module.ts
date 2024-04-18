import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentViewComponent } from "./containers/content-view/content-view.component";
// import { ManageQuickSelectComponent } from "./components/manage-quick-select/manage-quick-select.component";
// import { PostSchedulingComponent } from "./components/post-scheduling/post-scheduling.component";
// import { ManageWorkSpaceComponent } from "./components/manage-work-space/manage-work-space.component";
// import { OnBoardCompleteGuard } from "src/app/core/guards/onboardcompleteguard.guard";
// import { FeatureGuard } from "src/app/core/guards/feature.guard";
// import { Constants } from "src/app/shared/services";

const routes: Routes = [
  {
    path: "",
    component: ContentViewComponent,
    // canDeactivate: [ReloadCanDeactivateGuard, OnBoardCompleteGuard],
    // canDeactivate: [OnBoardCompleteGuard],
  },
  // {
  //   path: "quick-select",
  //   component: ManageQuickSelectComponent,
  // },
  // {
  //   path: "workspace",
  //   component: ManageWorkSpaceComponent,
  //   canActivate: [FeatureGuard],
  //   data: { featureAllowed: Constants.FEATURES_ALLOWED.Workspace },
  // },
  // {
  //   path: "post-schedule/:id",
  //   component: PostSchedulingComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [ReloadCanDeactivateGuard],
  providers: [],
})
export class ContentRoutingModule {}
