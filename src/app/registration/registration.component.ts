import { Component } from '@angular/core';
import TITLES from '../../labels/titles.json';
import PARAGRAPHS from '../../labels/paragraphs.json';
import BUTTONS from '../../labels/buttons.json';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title = TITLES.CzescMiloCiePoznac;
  paragraph = PARAGRAPHS.PodajPonizszeInformacje;
  linkParagraph = PARAGRAPHS.PosiadaszJuzKonto;
  buttonLabel = BUTTONS.Zarejestruj;
  loginLink = BUTTONS.Zaloguj;
}
