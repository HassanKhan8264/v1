import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  login() {
    this.http
      .post<any>("http://localhost:5001/api/v1/login", this.loginForm.value)
      .subscribe(
        (res) => {
          if (res) {
            console.log("Successfully logged in", res);
            localStorage.setItem("token", res.data.token);
            alert("Login Successful");
            this.loginForm.reset();
            this.router.navigate(["publish"]);
          } else {
            alert("User not found");
          }
        },
        (err) => {
          alert("Something went wrong");
        },
      );
  }
}
