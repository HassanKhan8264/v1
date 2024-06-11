import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { EndpointService } from "../../../core/http/endpoint.service";
import { take } from "rxjs";

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
    private endpoint: EndpointService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  userLogin() {
    let body = this.loginForm.value;
    return this.endpoint
      .user()
      .login(body)
      .subscribe({
        next: (res: any) => {
          console.log("res", res);
        },
        error: (error) => {
          console.log("err", error);
        },
      });
  }
}
