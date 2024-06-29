import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { ProfileService } from "../../core/http/profile.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly URL: string;
  constructor(private profile: ProfileService) {
    this.URL = environment.getUrl();
    console.log(this.URL);
  }

  isAuthenticated() {
    return this.profile.loggedIn().pipe(
      map((authenticated) => {
        return authenticated;
      }),
    );
  }
}
