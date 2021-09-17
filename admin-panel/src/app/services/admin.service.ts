import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:3000/admin'
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  login(email:string, password:string){
    const body = {
      email: email,
      password: password
    }
    return this.httpClient.post(this.url + '/signin', body)
  }
}
