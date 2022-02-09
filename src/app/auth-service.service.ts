import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) { }

  login({ email, password }: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register({ email, password }: LoginData) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }
}