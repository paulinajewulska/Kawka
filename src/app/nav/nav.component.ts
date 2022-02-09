import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  home = { src: '../../assets/icons/nav/home.png', alt: 'Home' };
  search = { src: '../../assets/icons/nav/search.png', alt: 'Search' };
  isDesktop = false;

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.isDesktop = window.innerWidth >= 780;
  }
}
