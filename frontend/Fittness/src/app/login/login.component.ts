import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: '',
    password: ''
  };
  isLoggedIn = false;
  loginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;

    if (!email || !password) {
      this.loginFailed = false;
      this.errorMessage = 'Please enter both email and password.';
      return; // Exit the function early if fields are missing
    }
  

    this.authService.login(email, password).subscribe(
      response => {
        this.tokenStorage.saveToken(response.token);
        this.tokenStorage.saveUser(response.user);
        this.isLoggedIn = true;
        this.loginFailed = false;
        this.router.navigate(['/profile']);
      },
      error => {
        this.errorMessage = error.error.error || 'An error occurred during login.';
        this.loginFailed = true;
      }
    );
  }
  onCreateAccount(): void {
    this.router.navigate(['/register']);
  }
}
