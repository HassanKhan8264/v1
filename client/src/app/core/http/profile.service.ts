import { EndpointService } from "./endpoint.service";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private endpoint: EndpointService) {}

  loggedIn() {
    return this.endpoint
      .authentication()
      .checkTokenStatus()
      .pipe(
        map((response) => response),
        catchError((error) => {
          console.error("Error checking authentication status:", error);
          return of(false);
        }),
      );
  }
}
