import { Component } from '@angular/core';
import TITLES from '../../labels/titles.json';
import PARAGRAPHS from '../../labels/paragraphs.json';
import BUTTONS from '../../labels/buttons.json';

const REGISTER_URL = '../register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = TITLES.SuperCieZnowuWidziec;
  linkParagraph = PARAGRAPHS.NiePosiadaszJeszczeKonta;
  buttonLabel = BUTTONS.Zaloguj;
  loginLink = BUTTONS.Zarejestruj;
  registerUrl = REGISTER_URL;
}
