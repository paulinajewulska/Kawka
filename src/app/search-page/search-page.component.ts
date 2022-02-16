import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import TITLES from '../../labels/titles.json';
import { CoffeeService, Coffee } from '../services/coffee.service';
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
  treatments: Array<string | undefined> = [];
  adacities: Array<string | undefined> = [];
  form: FormGroup;
  coffees: Array<Coffee> = [];
  allCoffees: any = [];

  constructor(private readonly fb: FormBuilder,
    private readonly coffeeService: CoffeeService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.getAllOrigins();
    this.form = this.fb.group({
      search: [''],
      origin: new FormControl(''),
      roaster: new FormControl(''),
      treatment: new FormControl(''),
      adacity: new FormControl('')
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
      this.allCoffees = data;
      this.coffees = data;
      this.origins = [... new Set(data.map(c => c.origin).filter(Boolean))];
      this.roasters = [... new Set(data.map(c => c.roaster).filter(Boolean))];
      this.treatments = [... new Set(data.map(c => c.treatment).filter(Boolean))];
      this.adacities = [... new Set(data.map(c => c.adacity).filter(Boolean))];
    });
  }

  redirectToCoffeeCard(id: string | undefined) {
    this.router.navigate(['/coffee-details', id]);
  }

  onSubmit() {
    const formValue = this.form.value;
    this.coffees = this.allCoffees;
    this.coffees = formValue.adacity.length ? this.coffees.filter((c: Coffee) => formValue.adacity?.includes(c.adacity)) : this.coffees;
    this.coffees = formValue.origin.length ? this.coffees.filter((c: Coffee) => formValue.origin?.includes(c.origin)) : this.coffees;
    this.coffees = formValue.roaster.length ? this.coffees.filter((c: Coffee) => formValue.roaster?.includes(c.roaster)) : this.coffees;
    this.coffees = formValue.treatment.length ? this.coffees.filter((c: Coffee) => formValue.treatment?.includes(c.treatment)) : this.coffees;
    this.coffees = formValue.search.length ? this.coffees.filter((c: Coffee) => c.name.includes(formValue.search)) : this.coffees;
  }
}
