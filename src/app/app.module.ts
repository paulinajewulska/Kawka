import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OpeningPageComponent } from './opening-page/opening-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoffeeCardComponent } from './coffee-card/coffee-card.component';
import { firebaseConfig } from './firebaseConfig';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // includes firebaseConfig info
import { MatSelectModule } from '@angular/material/select';
import { CoffeePageComponent } from './coffee-page/coffee-page.component';
import { BrewingMethodCardComponent } from './brewing-method-card/brewing-method-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    OpeningPageComponent,
    PageNotFoundComponent,
    CoffeeCardComponent,
    NavComponent,
    MenuComponent,
    SearchPageComponent,
    CoffeePageComponent,
    BrewingMethodCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
