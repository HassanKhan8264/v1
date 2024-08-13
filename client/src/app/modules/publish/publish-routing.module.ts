import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { ContentComponent } from "./components/content-comp/content.component";
import { CartComponent } from "./components/cart/cart.component";

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
        path: "addTask",
        component: AddTaskComponent,
      },
      {
        path: "cart",
        component: CartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishRoutingModule {}
