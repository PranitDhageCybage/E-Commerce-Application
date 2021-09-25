import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = 'http://localhost:4000/order';
  constructor(private httpClient: HttpClient) {}

  placeOrder(
    addressId: number,
    totalAmount: number,
    tax: number,
    paymentType: string,
    paymentStatus: string,
    deliveryStatus: string
  ) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token'],
      }),
    };

    const body = {
      addressId: addressId,
      totalAmount: totalAmount,
      tax: tax,
      paymentType: paymentType,
      paymentStatus: paymentStatus,
      deliveryStatus: deliveryStatus,
    };

    console.log(body);

    return this.httpClient.post(this.url, body, httpOptions);
  }
}
