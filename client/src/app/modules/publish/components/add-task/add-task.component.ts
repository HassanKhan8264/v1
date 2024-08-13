import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { EndpointService } from "src/app/core/http/endpoint.service";

@Component({
  selector: "v1-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  tweetForm: FormGroup;
  tweets: any[] = [];

  constructor(
    private Fb: FormBuilder,
    private endPoint: EndpointService,
  ) {}
  ngOnInit(): void {
    this.tweetForm = this.Fb.group({
      tweet: ["", [Validators.required]],
    });
    this.allTweets();
  }
  allTweets() {
    this.endPoint
      .tweet()
      .getAll()
      .subscribe({
        next: (res: any) => {
          console.log("all tweet agaya", res);
          this.tweets = res.data || [];
        },
        error: (error) => {
          console.log("all tweet nhi aya bc kya hua", error);
        },
      });
  }

  onSubmit() {
    this.endPoint
      .tweet()
      .create(this.tweetForm.value)
      .subscribe({
        next: (res: any) => {
          console.log("tweet agaya", res);
          this.allTweets();
        },
        error: (error) => {
          console.log("tweet nhi aya ", error);
        },
      });
  }
  addccount() {
    let account = "facebook account";
    let item = localStorage.setItem("account", account);
  }
}
