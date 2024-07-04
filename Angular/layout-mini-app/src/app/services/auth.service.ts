import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLogged: boolean = false;
  getUsername: string = '';

  login(username: string, password: string): boolean {
    if(username === 'master@lemoncode.net' && password === '12345678') {
      this.router.navigate(['/dashboard']);
      this.isLogged = true;
      this.getUsername = username;
      return true;
    }
    this.isLogged = false;
    this.getUsername = '';
    return false;
  }

  logout(): void {
    this.isLogged = false;
    this.getUsername = '';
    this.router.navigate(['/home']);
  }
}
