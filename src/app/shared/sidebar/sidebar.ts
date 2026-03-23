import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})


export class Sidebar {
constructor(
  private authService: AuthService,
  private router: Router
) {}

logout() {
  this.authService.logout();   // reuse service method
  this.router.navigate(['/login']);
}
}


