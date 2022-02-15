import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  home = { src: '../../assets/icons/nav/home.png', alt: 'Home' };
  search = { src: '../../assets/icons/nav/search.png', alt: 'Search' };
  isDesktop = false;
  selectedRoute: 'home';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.isDesktop = window.innerWidth >= 780;
  }

  navigateToHomePage() {
    this.router.navigate(['/home']);
  }

  navigateToSearchPage() {
    this.router.navigate(['/search']);
  }

  get isSelectedRouteHome() {
    return this.router.url.includes('home') ? true : false;
  }
}
