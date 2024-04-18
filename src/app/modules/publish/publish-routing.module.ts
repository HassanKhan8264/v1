import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublishLayoutComponent } from "./publish-layout/publish-layout/publish-layout.component";
// import { TeamMemberGuard } from "../../core/guards/team-member.guard";
// import { FeatureGuard } from "../../core/guards/feature.guard";
// import { PostApprovalMetaResolver } from "../../core/resolvers/post-approval-meta.resolver";
// import { AccountResolver } from "../../core/resolvers/selected-account.resolver";
// import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";
// import { ExternalAppResolver } from "../../core/resolvers/external-app.resolver";
// import { DefaultViewComponent } from "../../shared/views/default-view/default-view.component";
// import { Constants, _ } from "../../shared/services";
// import { OnBoardGuard } from "src/app/core/guards/onboarding.guard";
// import { BulkUploadResolver } from "src/app/core/resolvers/bulk-upload-resolver";

// const APP_VERSION = _.getAppVersion();

const routes: Routes = [
  {
    path: "",
    component: PublishLayoutComponent,
    children: [
      {
        path: "",
        // canActivate: [FeatureGuard],
        pathMatch: "full",
        redirectTo: "content",
      },
    //   {
    //     path: "add-profile",
    //     canActivate: [TeamMemberGuard],
    //     data: { feature: "ADD_PROFILE" },
    //     resolve: { url: ExternalAppResolver },
    //     component: DefaultViewComponent,
    //   },
    //   {
    //     path: "queue",
    //     canActivate: [TeamMemberGuard],
    //     data: { feature: "QUEUE" },
    //     loadChildren: () =>
    //       import("./features/queue/queue.module").then((m) => m.QueueModule),
    //   },
    //   {
    //     path: "suggestion",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "SUGGESTION",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Suggestions,
    //     },
    //     resolve: APP_VERSION === "1" ? { url: ExternalAppResolver } : {},
    //     loadChildren: () =>
    //       import("./features/suggestion/suggestion.module").then(
    //         (m) => m.SuggestionModule,
    //       ),
    //   },
    //   {
    //     path: "settings",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     redirectTo: "settings/workspace",
    //   },
    //   {
    //     path: "settings/workspace",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "WORKSPACE",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Workspace,
    //     },
    //     loadChildren: () =>
    //       import("./features/workspace/workspace.module").then(
    //         (m) => m.WorkspaceModule,
    //       ),
    //   },
    //   {
    //     path: "settings/link-shortening",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "LINK_SHORTENING",
    //       featureAllowed: Constants.FEATURES_ALLOWED.LinkShortening,
    //       permissions: [Constants.PERMISSIONS.MANAGE_PROFILES],
    //     },
    //     resolve: APP_VERSION === "1" ? { url: ExternalAppResolver } : {},
    //     loadChildren: () =>
    //       import("./features/link-shortening/link-shortening.module").then(
    //         (m) => m.LinkShorteningModule,
    //       ),
    //   },
    //   {
    //     path: "auto-rss",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "AUTO_RSS",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Autopost_RSS,
    //       permissions: [Constants.PERMISSIONS.MANAGE_AUTORSS],
    //     },
    //     loadChildren: () =>
    //       import("./features/auto-rss/auto-rss.module").then(
    //         (m) => m.AutoRssModule,
    //       ),
    //   },
      {
        path: "content",
        // canActivate: [TeamMemberGuard],
        // data: { feature: "CONTENT" },
        // resolve: APP_VERSION === "1" ? { url: ExternalAppResolver } : {},
        loadChildren: () =>
          import("./features/content/content.module").then(
            (m) => m.ContentModule,
          ),
      },
    //   {
    //     path: "bulk-upload",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "BULK_UPLOAD",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Bulk,
    //     },
    //     resolve:
    //       APP_VERSION === "1"
    //         ? { url: ExternalAppResolver }
    //         : { StateResponse: BulkUploadResolver },
    //     loadChildren: () =>
    //       import("./features/bulk-upload/bulk-upload.module").then(
    //         (m) => m.BulkUploadModule,
    //       ),
    //   },
    //   {
    //     path: "settings/manage-queue",
    //     canActivate: [TeamMemberGuard],
    //     data: { feature: "MANAGE_QUEUE" },
    //     loadChildren: () =>
    //       import("./features/manage-queue/manage-queue.module").then(
    //         (m) => m.ManageQueueModule,
    //       ),
    //   },
    //   // {
    //   //   path: "post-approval",
    //   //   canActivate: [AuthenticationGuard, FeatureGuard],
    //   //   resolve: { meta: PostApprovalMetaResolver, account: AccountResolver },
    //   //   data: { feature: "POST_APPROVAL", featureAllowed: Constants.FEATURES_ALLOWED.Team },
    //   //   loadChildren: () =>
    //   //     import("./features/post-approval-backup/post-approval.module").then(
    //   //       (m) => m.PostApprovalModuleBackup
    //   //     ),
    //   // },
    //   {
    //     path: "post-approval",
    //     canActivate: [FeatureGuard],
    //     resolve: { meta: PostApprovalMetaResolver, account: AccountResolver },
    //     data: {
    //       feature: "POST_APPROVAL",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Team,
    //     },
    //     loadChildren: () =>
    //       import("./features/post-approval/post-approval.module").then(
    //         (m) => m.PostApprovalModule,
    //       ),
    //   },
    //   {
    //     path: "settings/manage-social-accounts",
    //     canActivate: [TeamMemberGuard],
    //     data: { feature: "MANAGE_SOCIAL_ACCOUNTS" },
    //     loadChildren: () =>
    //       import(
    //         "./features/manage-social-accounts/manage-social-accounts.module"
    //       ).then((m) => m.ManageSocialAccountsModule),
    //   },
    //   {
    //     path: "settings/tracking",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "TRACKING",
    //       featureAllowed: Constants.FEATURES_ALLOWED.LinkShortening,
    //       permissions: [Constants.PERMISSIONS.MANAGE_PROFILES],
    //     },
    //     loadChildren: () =>
    //       import("./features/tracking/tracking.module").then(
    //         (m) => m.TrackingModule,
    //       ),
    //   },
    //   {
    //     path: "draft",
    //     canActivate: [TeamMemberGuard],
    //     data: {
    //       feature: "DRAFT",
    //     },
    //     loadChildren: () =>
    //       import("./features/draft/draft.module").then((m) => m.DraftModule),
    //   },
    //   {
    //     path: "recycle",
    //     canActivate: [TeamMemberGuard, FeatureGuard],
    //     data: {
    //       feature: "RECYCLE",
    //       featureAllowed: Constants.FEATURES_ALLOWED.Recycle,
    //       permissions: [Constants.PERMISSIONS.MANAGE_RECYCLE],
    //     },
    //     loadChildren: () =>
    //       import("./features/recycle/recycle.module").then(
    //         (m) => m.RecycleModule,
    //       ),
    //   },
    //   {
    //     path: "settings/notification",
    //     canActivate: [],
    //     loadChildren: () =>
    //       import("../../modules/notifications/notifications.module").then(
    //         (m) => m.NotificationsModule,
    //       ),
    //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishRoutingModule {}
