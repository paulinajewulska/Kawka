import { Component } from '@angular/core';
import TITLES from '../../labels/titles.json';
import PARAGRAPHS from '../../labels/paragraphs.json';
import BUTTONS from '../../labels/buttons.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

const LOGIN_URL = '../login';

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
  loginUrl = LOGIN_URL;
  emailError = PARAGRAPHS.EmailJestWymagany;
  passwordError = PARAGRAPHS.HasloJestWymagane;
  form: FormGroup;
  imgSrc = '../../assets/images/Peace.png';
  imgLabel = 'Peace Ilustration';

  constructor(private fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.authService
      .register(this.form.value)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));
  }
}
