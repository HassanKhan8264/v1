import { Component, OnInit } from "@angular/core";

@Component({
  selector: "v1-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  addccount() {
    let account = "facebook account";
    let item = localStorage.setItem("account", account);
  }
}
