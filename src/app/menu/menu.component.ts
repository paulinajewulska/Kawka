import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  logo = { src: '../../assets/icons/logo/logo_Kawka.png', alt: 'Kawka' };
  close = { src: '../../assets/icons/nav/close.png', alt: 'Close menu' };
  burger = { src: '../../assets/icons/nav/burger.png', alt: 'Open menu' };
  user = { src: '../../assets/icons/nav/user.png', alt: 'User panel' };
  isNavOpen = false;
  isDesktop = false;

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.isDesktop = window.innerWidth >= 780;
  }

  onToggleMenuMobile() {
    this.isNavOpen = !this.isNavOpen;
  }
}
