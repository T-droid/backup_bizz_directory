import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form: any = {
    username: '',
    email: '',
    password: ''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authservice.register(username, email, password).subscribe(
      response => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      error => {
        this.errorMessage = error.error.message || 'An error occurred during registration.';
        this.isSignUpFailed = true;
      }
    );
  }
}
