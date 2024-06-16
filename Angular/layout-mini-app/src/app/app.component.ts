import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuPublicComponent } from './layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './layout/menu-private/menu-private.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuPublicComponent, MenuPrivateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
}
