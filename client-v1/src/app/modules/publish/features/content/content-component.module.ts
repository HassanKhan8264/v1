import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { SharedModule } from "../../shared/shared.module";
// import { MaterialModule } from "../../shared/modules/material.module";
import { ContentViewComponent } from "./containers/content-view/content-view.component";
import { ContentLayoutComponent } from "./containers/content-layout/content-layout.component";
import { SharedModule } from "../../../../shared/shared.module";
import { MaterialModule } from "../../../../shared/modules/material.module";

// import { ContentLayoutComponent } from "./containers/content-layout/content-layout.component";
// import { ContentDialogComponent } from "./containers/content-dialog/content-dialog.component";
// import { SharedModule } from "../../../../shared/shared.module";
// import { PostEditorComponent } from "./components/post-editor/post-editor.component";
// import { ContentScreenComponent } from "./containers/content-screen/content-screen.component";
// import { ContentFooterComponent } from "./containers/content-footer/content-footer.component";
// import { LinkPreviewComponent } from "./components/link-preview/link-preview.component";
// import { PostSuggestionComponent } from "./components/post-suggestion/post-suggestion.component";
// import { PostGmbButtonsComponent } from "./components/post-gmb-buttons/post-gmb-buttons.component";
// import { MaterialModule } from "../../../../shared/modules/material.module";
// import { HashTagSuggestionsComponent } from "./components/hash-tag-suggestions/hash-tag-suggestions.component";
// import { HashTagSearchComponent } from "./components/hash-tag-search/hash-tag-search.component";
// import { HashTagSuggestionListComponent } from "./components/hash-tag-suggestion-list/hash-tag-suggestion-list.component";
// import { HashTagGroupFormComponent } from "./components/hash-tag-group-form/hash-tag-group-form.component";
// import { HashTagGroupSideBarComponent } from "./components/hash-tag-group-side-bar/hash-tag-group-side-bar.component";
// import { ManageQuickSelectComponent } from "./components/manage-quick-select/manage-quick-select.component";
// import { QuickSelectGroupComponent } from "./components/manage-quick-select/quick-select-group/quick-select-group.component";
// import { CreateQuickSelectGroupComponent } from "./components/manage-quick-select/create-quick-select-group/create-quick-select-group.component";
// import { PostSchedulingComponent } from "./components/post-scheduling/post-scheduling.component";
// import { PostRepeatComponent } from "./components/post-repeat/post-repeat.component";
// import { ContentViewComponent } from "./containers/content-view/content-view.component";
// import { ManageWorkSpaceComponent } from "./components/manage-work-space/manage-work-space.component";
// import { WorkSpaceListComponent } from "./components/manage-work-space/work-space-list/work-space-list.component";
// import { CreateWorkSpaceComponent } from "./components/manage-work-space/create-work-space/create-work-space.component";
// import { ContentRepeatComponent } from "./containers/content-repeat/content-repeat.component";
// import { ContentErrorPopupComponent } from "./components/content-error-popup/content-error-popup.component";
// import { ContentErrorProfilesAndMessageComponent } from "./components/content-error-profiles-and-message/content-error-profiles-and-message.component";
// import { MediaUploadComponent } from "./containers/media-upload/media-upload.component";
// import { ImagePreviewComponent } from "./components/image-preview/image-preview.component";
// import { YoutubeVideoFormComponent } from "./components/youtube/youtube-video-form/youtube-video-form.component";
// import { PostLocationComponent } from "./components/post-location/post-location.component";
// import { ContentPreviewComponent } from "./containers/content-preview/content-preview.component";
// import { SocialMediaExtrasComponent } from "./components/social-media-extras/social-media-extras.component";
// import { ContentScreenComponentsComponent } from "./containers/content-screen-components/content-screen-components.component";
// import { ContentScreenGlobalComponent } from "./containers/content-screen-global/content-screen-global.component";
// import { TwitterThreadDialogComponent } from "./components/twitter-thread-dialog/twitter-thread-dialog.component";
// import { FirstCommentComponent } from "./components/first-comment/first-comment.component";
// import { HashTagSuggestionDialogComponent } from "./components/hash-tag-suggestion-dialog/hash-tag-suggestion-dialog.component";

const components: any[] = [
  ContentLayoutComponent,
  // PostEditorComponent,
  // ContentScreenComponent,
  // ContentFooterComponent,
  // HashTagSuggestionsComponent,
  // HashTagSearchComponent,
  // HashTagSuggestionListComponent,
  // HashTagGroupFormComponent,
  // HashTagGroupSideBarComponent,
  // PostSuggestionComponent,
  // PostGmbButtonsComponent,
  // LinkPreviewComponent,
  // ManageQuickSelectComponent,
  // QuickSelectGroupComponent,
  // CreateQuickSelectGroupComponent,
  // PostSchedulingComponent,
  // PostRepeatComponent,
  ContentViewComponent,
  // ManageWorkSpaceComponent,
  // WorkSpaceListComponent,
  // CreateWorkSpaceComponent,
  // ContentRepeatComponent,
  // ContentDialogComponent,
  // ContentErrorPopupComponent,
  // ContentErrorProfilesAndMessageComponent,
  // MediaUploadComponent,
  // ImagePreviewComponent,
  // PostLocationComponent,
  // YoutubeVideoFormComponent,
  // ContentPreviewComponent,
  // SocialMediaExtrasComponent,
  // ContentScreenComponentsComponent,
  // ContentScreenGlobalComponent,
  // TwitterThreadDialogComponent,
  // FirstCommentComponent,
  // HashTagSuggestionDialogComponent,
];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [...components],
})
export class ContentComponentModule {}
