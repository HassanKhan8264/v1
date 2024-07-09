import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { EndpointService } from "../../../core/http/endpoint.service";

@Component({
  selector: "v1-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private endpoint: EndpointService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  registerUser() {
    let body = this.signUpForm.value;
    return this.endpoint
      .user()
      .register(body)
      .subscribe({
        next: (res: any) => {
          console.log("res", res);
          this.router.navigate(["/pages/login"]);
        },
        error: (error) => {
          console.log("err", error);
        },
      });
  }
}
