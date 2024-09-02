import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private user = new BehaviorSubject<string>('');
  getUsername = this.user.asObservable();

  private logged = new BehaviorSubject<boolean>(false);
  isLogged = this.logged.asObservable();

  login(username: string, password: string): boolean {
    if(username === 'master@lemoncode.net' && password === '12345678') {
      this.user.next(username);
      this.logged.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    this.user.next('');
    this.logged.next(false);
    return false;
  }

  logout(): void {
    this.logged.next(false);
    this.user.next('');
    this.router.navigate(['/home']);
  }
}
