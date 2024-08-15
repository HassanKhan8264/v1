import { Component, OnInit } from "@angular/core";
import { EndpointService } from "../../../core/http/endpoint.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthState } from "src/app/core/store/states/auth/auth.reducer";

@Component({
  selector: "v1-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  user$: Observable<any>;
  error$: Observable<any>;
  constructor(
    private store: Store<{ auth: AuthState }>,
    private endpoint: EndpointService,
    private router: Router,
  ) {
    this.isAuthenticated$ = this.store.select(
      (state) => state.auth.isAuthenticated,
    );
    this.user$ = this.store.select((state) => state.auth.user);
    this.error$ = this.store.select((state) => state.auth.error);
  }

  ngOnInit(): void {}
  logout() {
    this.endpoint
      .user()
      .logout()
      .subscribe({
        next: () => {
          this.router.navigate(["/pages/login"]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
