import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {
    console.log('Inside Sign Up Component');
  }

  ngOnInit(): void {}

  onSignup() {
    this.authService
      .signup(this.firstName, this.lastName, this.email, this.password)
      .subscribe((response: any) => {
        if (response['status'] == 'success') {
          alert('Signed Up Successfully. Login to Continue');
          this.router.navigate(['/auth/login']);
        } else {
          alert(response['error']);
        }
      });
  }
}
