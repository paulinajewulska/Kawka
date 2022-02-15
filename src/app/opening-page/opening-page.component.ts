import { Component } from '@angular/core';
import TITLES from '../../labels/titles.json';
import PARAGRAPHS from '../../labels/paragraphs.json';
import BUTTONS from '../../labels/buttons.json';
import { LINK_DESIGN_TYPE } from '../shared/components/base/link/link.component';

const LOGIN_URL = '../login';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.scss']
})
export class OpeningPageComponent {
  title = TITLES.CzasNaSmacznaKawusie;
  paragraph = PARAGRAPHS.WiadomoZeKawa;
  buttonLabel = BUTTONS.Zaczynajmy;
  LINK_DESIGN_TYPE = LINK_DESIGN_TYPE;
  loginUrl = LOGIN_URL;
  imgSrc = '../../assets/images/CupofClouds.png';
  imgLabel = 'Coffee Cub Ilustration';
}
