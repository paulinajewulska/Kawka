import { Component } from '@angular/core';
import TITLES from '../../labels/titles.json';
import PARAGRAPHS from '../../labels/paragraphs.json';
import BUTTONS from '../../labels/buttons.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isLabeledStatement } from 'typescript';
import { AuthService } from '../services/auth-service.service';

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
  emailError = PARAGRAPHS.EmailJestWymagany;
  passwordError = PARAGRAPHS.HasloJestWymagane;
  registerUrl = REGISTER_URL;
  form: FormGroup;

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
      .login(this.form.value)
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }
}
