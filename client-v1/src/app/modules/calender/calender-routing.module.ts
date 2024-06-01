import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalenderLayoutComponent } from "./calender-layout/calender-layout.component";

const routes: Routes = [
  {
    path: "",
    component: CalenderLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderRoutingModule {}
