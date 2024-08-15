import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { EndpointService } from "../../../core/http/endpoint.service";
import { Observable } from "rxjs";
import { AuthState } from "src/app/core/store/states/auth/auth.reducer";
import { Store } from "@ngrx/store";
import { AuthActions } from "src/app/core/store/states/auth/auth.actions";

@Component({
  selector: "v1-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error$: Observable<string | null>;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private endpoint: EndpointService,
    private store: Store<{ auth: AuthState }>,
  ) {
    this.error$ = store.select((state) => state.auth.error);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    let body = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value,
    };
    if (body.email && body.password) {
      this.store.dispatch(AuthActions.login({ body }));
      this.router.navigate(["/pages"]);
    }
  }
}
