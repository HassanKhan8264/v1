import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
// import { FullCalendarModule } from "@fullcalendar/angular";
// import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
// import { CapitalizePipe } from "./pipes/capitalize.pipe";
// import { ShortNumberPipe } from "./pipes/short-number.pipe";
// import { EllipsisPipe } from "./pipes/ellipsis.pipe";
// import { TimeAgoPipe } from "./pipes/time-ago.pipe";
// import { UserCardComponent } from "./components/user-card/user-card.component";
// import { SelectComponent } from "./components/select/select.component";
// import { MaterialModule } from "./modules/material.module";
// import { RouterModule } from "@angular/router";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { ChartJS, LocalStorage, Alert, Logger, Memory } from "./services";
// import { PostViewCardComponent } from "./components/post-view-card/post-view-card.component";
// import { PostActionCardComponent } from "./components/post-action-card/post-action-card.component";
// import { MaterialFileInputModule } from "ngx-material-file-input";
// import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
// import { NgxMasonryModule } from "ngx-masonry";
// import { ProfileImageFallbackDirective } from "./directives/profile-image-fallback.directive";
// import { AutofocusDirective } from "./directives/autofocus.directive";
// import { SafeUrlPipe } from "./pipes/safe-url.pipe";
// import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
// import { SafeResourceUrlPipe } from "./pipes/safe-resource-url.pipe";
// import { PrompterComponent } from "./components/prompter/prompter.component";
// import { DefaultViewComponent } from "./views/default-view/default-view.component";
// import { WildCardComponent } from "./components/wild-card/wild-card.component";
// import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
// import { NewellModule } from "./modules/newell.module";
// import { SharedProfileSidebarComponent } from "./components/shared-profile-sidebar/shared-profile-sidebar.component";
// import { UserChipComponent } from "./components/user-chip/user-chip.component";
// import { EmojiPickerComponent } from "./components/emoji-picker/emoji-picker.component";
// import { PickerModule } from "@ctrl/ngx-emoji-mart";
// import { ProfileSelectorBarComponent } from "./components/profile-selector-bar/profile-selector-bar.component";
// import { ScDateTimePickerComponent } from "./components/sc-date-time-picker/date-time-picker.component";
// import { GalleryComponent } from "./components/gallery/gallery.component";
// import { ImageEditorComponent } from "./components/image-editor/image-editor.component";
// import { ScNewellNumberSelectComponent } from "./components/number-selector/number-select.component";
// import { ScNewellTimePickerComponent } from "./components/time-picker/time-picker.component";
// import { AppSwitcherDialogComponent } from "./components/app-switcher-dialog/app-switcher-dialog.component";
// import { AlertComponent } from "./components/alert/alert.component";
// import { SentimentComponent } from "./components/sentiment/sentiment.component";
// import { SocialAccountCardComponent } from "./components/social-account-card/social-account-card.component";
// import { ImageViewerComponent } from "./components/image-viewer/image-viewer.component";
// import { RepetitionTableViewComponent } from "./components/repetition-table-view/repetition-table-view.component";
// import { CustomSearchPipe } from "./pipes/custom-search.pipe";
// import { MeridianPipe } from "./pipes/merdian.pipe";
// import { SavedDraftsListComponent } from "./components/saved-drafts-list/saved-drafts-list.component";
// import { SavedDraftsDialogComponent } from "./components/saved-drafts-dialog/saved-drafts-dialog.component";
// import { VideoViewerComponent } from "./components/video-viewer/video-viewer.component";
// import { SavedDraftPostCardComponent } from "./components/saved-draft-post-card/saved-draft-post-card.component";
// import { FeatureLayoutComponent } from "./components/feature-layout/feature-layout.component";
// import { InfiniteScrollDirective } from "./directives/scroll.directive";
// import { CreateNewContainerComponent } from "./components/create-new-container/create-new-container.component";
// import { DetailedActionComponent } from "./components/detailed-action-card/detailed-action-card.component";
// import { TimeTableQueueComponent } from "./components/timetable-queue/timetable-queue.component";
// import { CollectionFormComponent } from "./components/collection-form/collection-form.component";
// import { AppProgressBarComponent } from "./components/app-progress-bar/app-progress-bar.component";
// import { TourCompletedPopoverComponent } from "./components/tour-completed-popover/tour-completed-popover.component";
// import { AppProgressSpinner } from "./components/app-progress-spinner/app-progress-spinner.component";
// import { FetchLoaderComponent } from "./components/fetch-loader/fetch-loader.component";
// import { ShortAccountsListComponent } from "./components/short-accounts-list/short-accounts-list.component";
// import { NameAvatarComponent } from "./components/name-avatar/name-avatar.component";
// import { ConsequencesComponent } from "./components/consequences/consequences.component";
// import { PlanUpgradeBannerComponent } from "./components/plan-upgrade-banner/plan-upgrade-banner.component";
// import { NoFoundPageComponent } from "./components/page-not-found/page-not-found.component";
// import { CommentsComponent } from "./components/comments/comments.component";
// import { CaptureThumbnailComponent } from "./components/capture-thumbnail/capture-thumbnail.component";
// import { AltImageViewerComponent } from "./components/alt-image-viewer/alt-image-viewer.component";
// import { CustomTooltipComponent } from "./components/custom-tooltip/custom-tooltip.component";
// import { SidebarComponent } from "./components/sidebar/sidebar.component";
// import { FacebookPostCardComponent } from "./components/facebook-post-card/facebook-post-card.component";
// import { TwitterPostCardComponent } from "./components/twitter-post-card/twitter-post-card.component";
// import { LinkedInPostCardComponent } from "./components/linked-in-post-card/linked-in-post-card.component";
// import { InstagramPostCardComponent } from "./components/instagram-post-card/instagram-post-card.component";
// import { SharedSocialAccountsDropdownComponent } from "./components/shared-social-accounts-dropdown/shared-social-accounts-dropdown.component";
// import { GmbPostCardComponent } from "./components/gmb-post-card/gmb-post-card.component";
// import { PinterestPostCardComponent } from "./components/pinterest-post-card/pinterest-post-card.component";
// import { YoutubePostCardComponent } from "./components/youtube-post-card/youtube-post-card.component";
// import { ImageSliderComponent } from "./components/image-slider/image-slider.component";
// import { AppWarningBarComponent } from "./components/app-warning-bar/app-warning-bar.component";
// import { ConversationHeaderComponent } from "../modules/engage/components/conversation-header/conversation-header.component";
// import { ProfilePictureComponent } from "./components/profile-picture/profile-picture.component";
// import { MultiMediaViewComponent } from "./components/multi-media-view/multi-media-view.component";
// import { AlertBarComponent } from "./components/alert-bar/alert-bar.component";
// import { MessageAlertComponent } from "./components/message-alert/message-alert.component";
// import { AccountsPlanInfoComponent } from "./components/accounts-plan-info/accounts-plan-info.component";
// import { DownloadProgressBarComponent } from "./components/download-progress-bar/download-progress-bar.component";
// import { TiktokPostCardComponent } from "./components/tiktok-post-card/tiktok-post-card.component";
// import { EmbedViewerComponent } from "./components/embed-viewer/embed-viewer.component";
// import { CustomCardComponent } from "./components/custom-card/custom-card.component";
// import { SocialAccountDropdownComponent } from "./components/social-account-dropdown/social-account-dropdown.component";
// import { AbbreviateNumberPipe } from "./pipes/abbreviateNumber";
// import { ImageSlideWithDialogComponent } from "./components/image-slide-with-dialog/image-slide-with-dialog.component";
// import { PageLayoutComponent } from "./components/page-layout/page-layout.component";
// import { AdditionalAuthDialogComponent } from "./components/additional-auth-dialog-component/additional-auth-dialog-component";
// import { ZeroStateComponent } from "./components/zero-state/zero-state.component";
// import { TagImageViewerComponent } from "./components/tag-image-viewer/tag-image-viewer.component";
// import { CustomUserTagsComponent } from "./components/custom-user-tags/custom-user-tags.component";
// import { TimezoneDropdownComponent } from "./components/timezone-dropdown/timezone-dropdown.component";
// import { NoteComponent } from "./components/note/note.component";
// import { ShortAccountsListPopoverComponent } from "./components/short-accounts-list-popover/short-accounts-list-popover.component";
// import { SearchBarComponent } from "./components/search-bar/search-bar.component";
// import { PostViewerComponent } from "./components/post-viewer/post-viewer.component";
// import { AddMultiAccountDialogComponent } from "./components/add-multi-account-dialog/add-multi-account-dialog.component";
// import { DndDirective } from "./directives/dnd.directive";
// import { InstaStoryNoteComponent } from "./components/insta-story-note/insta-story-note.component";
// import { CalendarComponent } from "./components/calendar/calendar.component";
// import { CalendarPostOverlayComponent } from "./components/calendar-post-overlay/calendar-post-overlay.component";
// import { SharedCalendarManageComponent } from "./components/shared-calendar-manage/shared-calendar-manage.component";
// import { SharedCalendarAddComponent } from "./components/shared-calendar-add/shared-calendar-add.component";
// import { ManageQuickSelectComponent } from "./components/manage-quick-select/manage-quick-select.component";
// import { InAppFeedbackComponent } from "./components/in-app-feedback/in-app-feedback.component";
// import { DraftTypeDialogComponent } from "./components/draft-type-dialog/draft-type-dialog.component";
// import { DraftTableComponent } from "./components/draft-table/draft-table.component";
// import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
// import { SharedCalendarTableComponent } from "./components/shared-calendar-table/shared-calendar-table.component";
// import { FallbackUIComponent } from "./components/fallback-ui/fallback-ui.component";
// import { TableCreateButtonComponent } from "./components/table-create-button/table-create-button.component";
// import { FilterLayoutComponent } from "./components/filter-layout/filter-layout.component";
// import { SavedDraftFilterComponent } from "./components/saved-draft-filter/saved-draft-filter.component";
// import { BulkDeleteComponent } from "./components/bulk-delete/bulk-delete.component";
// import { ToastComponent } from "./components/toast/toast.component";
// import { MastodonPostCardComponent } from "./components/mastodon-post-card/mastodon-post-card.component";
// import { TileComponent } from "./components/tile/tile.component";
// import { TextGenerationAiComponent } from "./components/text-generation-ai/text-generation-ai.component";
// import { FilterComponent } from "./components/filter/filter.component";
// import { InstagramGridViewComponent } from "./components/instagram-grid-view/instagram-grid-view.component";
// import { MediaViewerComponent } from "./components/media-viewer/media-viewer.component";
// import { DeclineReasonUIComponent } from "./components/decline-reason-ui/decline-reason-ui.component";
// import { ToastrComponent } from "./components/toastr/toastr.component";
// import { NotificationFilterPipe } from "./pipes/notification-filter.pipe";
// import { CardComponent } from "./components/card/card.component";
// import { ScheduleDialogeComponent } from "./components/schedule-dialoge/schedule-dialoge.component";
// import { ComponentsViewComponent } from "./views/components-view/components-view.component";
// import { MediaUiHandlerComponent } from "./components/media-ui-handler/media-ui-handler.component";
// import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
// import { TimeslotesTableComponent } from "./components/timeslotes-table/timeslotes-table.component";
// import { PostZeroStateComponent } from "./components/post-zero-state/post-zero-state.component";
// import { PostTextComponent } from "./components/post-text/post-text.component";
// import { PostHeaderComponent } from "./components/post-header/post-header.component";
// import { InfoCardComponent } from "./components/info-card/info-card.component";
// import { ReconnectRedirectDialogComponent } from "./components/reconnect-redirect-dialog/reconnect-redirect-dialog.component";
// import { ReelsTagingComponent } from "./components/reels-taging/reels-taging.component";

const pipes: any[] = [
  // ShortNumberPipe,
  // CapitalizePipe,
  // EllipsisPipe,
  // SafeUrlPipe,
  // SafeHtmlPipe,
  // SafeResourceUrlPipe,
  // CustomSearchPipe,
  // TimeAgoPipe,
  // MeridianPipe,
  // AbbreviateNumberPipe,
  // NotificationFilterPipe,
];

const directives: any[] = [
  // ProfileImageFallbackDirective,
  // AutofocusDirective,
  // InfiniteScrollDirective,
  // DndDirective,
];

const components: any[] = [
  // UserCardComponent,
  // PostViewCardComponent,
  // PostActionCardComponent,
  // PageNotFoundComponent,
  // PrompterComponent,
  // DefaultViewComponent,
  // WildCardComponent,
  // UserAvatarComponent,
  // SharedProfileSidebarComponent,
  // UserChipComponent,
  // EmojiPickerComponent,
  // ProfileSelectorBarComponent,
  // ScDateTimePickerComponent,
  // GalleryComponent,
  // ImageEditorComponent,
  // SelectComponent,
  // ScNewellNumberSelectComponent,
  // ScNewellTimePickerComponent,
  // AppSwitcherDialogComponent,
  // AlertComponent,
  // SentimentComponent,
  // ImageViewerComponent,
  // VideoViewerComponent,
  // SavedDraftsListComponent,
  // SavedDraftPostCardComponent,
  // SavedDraftsDialogComponent,
  // SocialAccountCardComponent,
  // ImageViewerComponent,
  // CreateNewContainerComponent,
  // DetailedActionComponent,
  // TimeTableQueueComponent,
  // RepetitionTableViewComponent,
  // FeatureLayoutComponent,
  // CollectionFormComponent,
  // AppProgressBarComponent,
  // TourCompletedPopoverComponent,
  // AppProgressSpinner,
  // FetchLoaderComponent,
  // ShortAccountsListComponent,
  // NameAvatarComponent,
  // ConsequencesComponent,
  // NoFoundPageComponent,
  // PlanUpgradeBannerComponent,
  // CommentsComponent,
  // CaptureThumbnailComponent,
  // CustomTooltipComponent,
  // SidebarComponent,
  // FacebookPostCardComponent,
  // TwitterPostCardComponent,
  // LinkedInPostCardComponent,
  // InstagramPostCardComponent,
  // SharedSocialAccountsDropdownComponent,
  // AltImageViewerComponent,
  // GmbPostCardComponent,
  // PinterestPostCardComponent,
  // YoutubePostCardComponent,
  // TiktokPostCardComponent,
  // ImageSliderComponent,
  // AppWarningBarComponent,
  // ConversationHeaderComponent,
  // ProfilePictureComponent,
  // MultiMediaViewComponent,
  // AlertBarComponent,
  // MessageAlertComponent,
  // AccountsPlanInfoComponent,
  // DownloadProgressBarComponent,
  // EmbedViewerComponent,
  // CustomCardComponent,
  // SocialAccountDropdownComponent,
  // ImageSlideWithDialogComponent,
  // PageLayoutComponent,
  // AdditionalAuthDialogComponent,
  // ZeroStateComponent,
  // TagImageViewerComponent,
  // CustomUserTagsComponent,
  // TimezoneDropdownComponent,
  // NoteComponent,
  // ShortAccountsListPopoverComponent,
  // SearchBarComponent,
  // PostViewerComponent,
  // AddMultiAccountDialogComponent,
  // InstaStoryNoteComponent,
  // CalendarComponent,
  // CalendarPostOverlayComponent,
  // SharedCalendarManageComponent,
  // SharedCalendarAddComponent,
  // SharedCalendarTableComponent,
  // InAppFeedbackComponent,
  // ManageQuickSelectComponent,
  // InAppFeedbackComponent,
  // DraftTableComponent,
  // DraftTypeDialogComponent,
  // FallbackUIComponent,
  // TableCreateButtonComponent,
  // FilterLayoutComponent,
  // BulkDeleteComponent,
  // ToastComponent,
  // MastodonPostCardComponent,
  // SavedDraftFilterComponent,
  // TileComponent,
  // TextGenerationAiComponent,
  // FilterComponent,
  // InstagramGridViewComponent,
  // MediaViewerComponent,
  // DeclineReasonUIComponent,
  // ToastrComponent,
  // CardComponent,
  // ScheduleDialogeComponent,
  // ComponentsViewComponent,
  // MediaUiHandlerComponent,
  // PostPreviewComponent,
  // TimeslotesTableComponent,
  // PostZeroStateComponent,
  // PostTextComponent,
  // PostHeaderComponent,
  // InfoCardComponent,
  // ReconnectRedirectDialogComponent,
  // ReelsTagingComponent,
];

// const modules = [
//   // NewellCommonModule,
//   NewellAlertModule,
//   NewellDisplayModule,
//   NewellFormsModule,
//   NewellUtilityModule,
//   NewellWildCardModule,
// ];
// const services = [ChartJS, Logger, Alert, LocalStorage, Memory];
const services: any[] = [];

@NgModule({
  declarations: [...pipes, ...components, ...directives],
  imports: [
    CommonModule,
    MaterialModule,
    // NewellModule,
    RouterModule,
    FormsModule
    // FormsModule,
    // ReactiveFormsModule,
    // MaterialFileInputModule,
    // PickerModule,
    // FullCalendarModule,
    // NgxDaterangepickerMd.forRoot(),
  ],
  providers: [
    ...services,
    // { provide: MAT_DIALOG_DATA, useValue: {} },
    // { provide: MatDialogRef, useValue: {} },
  ],
  exports: [
    ...pipes,
    ...components,
    ...directives,
    MaterialModule,
    // NewellModule,
    RouterModule,
    FormsModule
    // FormsModule,
    // ReactiveFormsModule,
    // MaterialFileInputModule,
    // NgxMasonryModule,
    // PickerModule,
    // FullCalendarModule,
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
