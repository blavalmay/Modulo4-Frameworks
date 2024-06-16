import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-private',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './menu-private.component.html',
  styleUrl: './menu-private.component.css'
})
export class MenuPrivateComponent {

}
