import { NgIf } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { UserCredentials } from '../model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userCredentials: UserCredentials;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userCredentials = {
      username: '',
      password: '',
    }
  }

  login() {
    this.authService.login(this.userCredentials.username, this.userCredentials.password)
  }

}
