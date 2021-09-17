import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin-panel';
  constructor(private router: Router) {
    console.log('Inside App Root Component Constructor');
  }

  onLogout() {
    // sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
