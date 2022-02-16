import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OpeningPageComponent } from './opening-page/opening-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CoffeePageComponent } from './coffee-page/coffee-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'start', component: OpeningPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'coffee-details/:id', component: CoffeePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
