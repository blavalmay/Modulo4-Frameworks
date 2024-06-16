import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-public',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './menu-public.component.html',
  styleUrl: './menu-public.component.css'
})
export class MenuPublicComponent {

}
