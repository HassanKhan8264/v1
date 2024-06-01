import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly URL: string;

  constructor(private _http: HttpClient) {
    this.URL = environment.server.getUrl();
    console.log(this.URL);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  // signup(payload: any) {
  //   this._http.post(`${this.URL}/signup`, payload);
  // }
}
