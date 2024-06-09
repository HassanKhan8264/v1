import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cl-calender-layout",
  templateUrl: "./calender-layout.component.html",
  styleUrl: "./calender-layout.component.scss",
})
export class CalenderLayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}
  ngOnInit() {
    this.login();
  }
  login() {
    this.http.get<any>("http://localhost:5001/api/getAllUsers").subscribe(
      (res) => {
        if (res) {
          console.log("Successfully logged in", res);
        } else {
          alert("User not found");
        }
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(["/login"]);
          }
        }
      },
    );
  }
}
