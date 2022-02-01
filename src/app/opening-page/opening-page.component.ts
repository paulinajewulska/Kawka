import { Component } from '@angular/core';
import TITLES from '../../labels/titles.json';
import PARAGRAPHS from '../../labels/paragraphs.json';
import BUTTONS from '../../labels/buttons.json';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.scss']
})
export class OpeningPageComponent {
  title = TITLES.CzasNaSmacznaKawusie;
  paragraph = PARAGRAPHS.Lorem;
  buttonLabel = BUTTONS.Zaczynajmy;
}
