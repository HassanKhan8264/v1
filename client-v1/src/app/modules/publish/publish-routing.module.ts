import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ContentComponent } from "./content/content.component";

const routes: Routes = [
  {
    path: "",
    component: PublishLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "content",
      },
      {
        path: "content",
        component: ContentComponent,
      },
      {
        path: "welcome",
        component: WelcomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishRoutingModule {}
