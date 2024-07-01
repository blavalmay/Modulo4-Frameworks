import { NgIf } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

interface UserCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userCredentials: UserCredentials;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userCredentials = {
      username: '',
      password: '',
    }
  }

  login(): boolean {
    if(this.userCredentials.username === 'master@lemoncode.net' && this.userCredentials.password === '12345678') {
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }
}
