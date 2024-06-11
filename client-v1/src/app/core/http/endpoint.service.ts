import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EndpointService {
  private readonly URL: string;

  constructor(private _http: HttpClient) {
    this.URL = environment.server.self.getUrl();
    console.log(this.URL);
  }
  authentication() {
    return {
      checkTokenStatus() {
        return this._http.get(`${this.URL}api/v1/verifyUserToken`);
      },
    };
  }

  user() {
    return {
      login: (body) => {
        return this._http.post(`${this.URL}auth/login`, body);
      },
      register: (body: any) => {
        return this._http.post(`${this.URL}/auth.register`, body);
      },
      getAll() {
        return this._http.get(`${this.URL}/api/v1/getAllUsers`);
      },
    };
  }
}
