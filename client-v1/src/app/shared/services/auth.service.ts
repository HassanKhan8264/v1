import { EndpointService } from "./../../core/http/endpoint.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { map } from "rxjs";
import { Router } from "@angular/router";
import { ProfileService } from "../../core/http/profile.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly URL: string;
  constructor(
    private _http: HttpClient,
    private endpoint: EndpointService,
    private router: Router,
    private user: ProfileService,
  ) {
    this.URL = environment.server.self.getUrl();
    console.log(this.URL);
  }
  isAuthenticated() {
    return this.user.loggedIn().pipe(
      map((isAuth) => {
        if (!isAuth) {
          return isAuth;
        }
        return isAuth;
      }),
    );
  }
  getToken() {}
  // signup(payload: any) {
  //   this._http.post(`${this.URL}/signup`, payload);
  // }
}
