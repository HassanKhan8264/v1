import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EndpointService {
  private readonly URL: string;

  constructor(private _http: HttpClient) {
    this.URL = environment.server.getUrl();
    console.log(this.URL);
  }

  getAll() {
    return this._http.get(`${this.URL}/api/v1/getAllUsers`);
  }
  checkTokenStatus() {
    return this._http.get(`${this.URL}api/v1/verifyUserToken`);
  }

  loggedIn() {
    return this.checkTokenStatus().pipe(
      map(response => response),
      catchError(error => {
        console.error('Error checking authentication status:', error);
        return of(false);
      })
    );
  }
}
