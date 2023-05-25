import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navVisible: boolean = false;
  toggleNav(): void {
    this.navVisible = !this.navVisible;
    console.log('oiiiiiiiii');
  }
}
