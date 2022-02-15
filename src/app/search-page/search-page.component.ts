import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import TITLES from '../../labels/titles.json';
import { CoffeeService } from '../services/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  title = TITLES.OtoCoUdaloNamSieZnalezc;
  origins: Array<string | undefined> = [];
  roasters: Array<string | undefined> = [];
  treatmens: Array<string | undefined> = [];
  degrees: Array<string | undefined> = [];
  form: FormGroup;
  coffees: any = [];

  constructor(private fb: FormBuilder,
    private readonly coffeeService: CoffeeService,
    private db: AngularFirestore,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.getAllOrigins();
    this.form = this.fb.group({
      search: [''],
      origin: new FormControl(''),
      roaster: new FormControl(''),
      treatmen: new FormControl(''),
      degree: new FormControl('')
    });
  }

  getAllOrigins(): void {
    this.coffeeService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.coffees = data;
      this.origins = [... new Set(data.map(c => c.origin))];
      this.roasters = [... new Set(data.map(c => c.roaster))];
      this.treatmens = [... new Set(data.map(c => c.treatment))];
      this.degrees = [... new Set(data.map(c => c.degree))];
    });
  }

  redirectToCoffeeCard(id: number) {
    this.router.navigate(['/coffee-details', id]);
  }

  async onSubmit() {
  }
}
