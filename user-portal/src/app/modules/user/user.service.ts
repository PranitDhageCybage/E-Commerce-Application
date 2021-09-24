import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:4000/address';
  constructor(private httpClient: HttpClient) {}

  getAddress() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token'],
      }),
    };

    return this.httpClient.get(this.url, httpOptions);
  }

  addAddress(
    address: string,
    city: string,
    state: string,
    country: string,
    pin: string
  ) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token'],
      }),
    };

    const body = {
      address: address,
      city: city,
      state: state,
      country: country,
      pin: pin,
    };

    return this.httpClient.post(this.url, body, httpOptions);
  }

  deleteAddress(id: number) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token'],
      }),
    };

    return this.httpClient.delete(this.url + '/' + id, httpOptions);
  }
}
