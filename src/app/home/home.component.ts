import { Component, OnInit } from '@angular/core';
import TITLES from '../../labels/titles.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classicsLabel = TITLES.KawoweKlasyki;
  newLabel = TITLES.Nowosci;

  constructor() { }

  ngOnInit(): void {
  }

}
