import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ["", Validators.required], // Name field added
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required], // Phone number field added
      password: ["", Validators.required],
    });
  }

  signUp() {
    this.http
      .post<any>("http://localhost:5001/api/signup", this.signUpForm.value)
      .subscribe(
        (res) => {
          alert("Signup Successful");
          console.log("user", res);

          this.signUpForm.reset();
          this.router.navigate(["login"]);
        },
        (err) => {
          alert("Something went wrong");
        },
      );
  }
}
