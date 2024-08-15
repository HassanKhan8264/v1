import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EndpointService {
  private readonly URL: string;
  private readonly PURL: any;

  constructor(private _http: HttpClient) {
    this.URL = environment.getUrl();
  }
  // testData(body) {
  //   return this._http.post(`${this.URL}api/v1/testData`, body);
  // }
  authentication() {
    return {
      checkTokenStatus: () => {
        return this._http.get(`${this.URL}api/v1/verifyTokenStatus`);
      },
    };
  }

  user() {
    return {
      register: (body: any) => {
        return this._http.post(`${this.URL}api/v1/auth/register`, body);
      },
      login: (body: any) => {
        return this._http.post(`${this.URL}api/v1/auth/login`, body);
      },
      logout: () => {
        return this._http.post(`${this.URL}api/v1/auth/logout`, {});
      },
      getAll: () => {
        return this._http.get(`${this.URL}api/v1/getAllUsers`);
      },
    };
  }
  tweet() {
    return {
      create: (body: any) => {
        return this._http.post(`${this.URL}api/v1/addTweet`, body);
      },
      getAll: () => {
        return this._http.get(`${this.URL}api/v1/getAllTweets`);
      },
      getAllFeedTweets: () => {
        return this._http.get(`${this.URL}api/v1/getAllFeedTweets`);
      },
    };
  }
}
