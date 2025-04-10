import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Add CommonModule here
import { FormsModule } from '@angular/forms';    // <-- Add FormsModule here
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],  // Ensure RouterModule is imported for Router service
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  validUsername = 'admin';
  validPassword = 'password123';

  constructor(private router: Router) {}

  onSubmit() {
    if (
      this.username === this.validUsername &&
      this.password === this.validPassword
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }
}
