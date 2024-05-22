import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  private readonly URL: string;
  varify = ''

  constructor(private _http: HttpClient) {
    this.URL = environment.server.getUrl()
    console.log(this.URL);
  }

getAll () {
  return this._http.get(`${this.URL}/getAllUsers`)
}

}
