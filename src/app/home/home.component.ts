import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import TITLES from '../../labels/titles.json';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classicsLabel = TITLES.KawoweKlasyki;
  newLabel = TITLES.Nowosci;
  classicCoffees: any;
  newCoffees: any;
  constructor(private readonly coffeeService: CoffeeService, private readonly router: Router) { }

  ngOnInit(): void {
    this.getNewCoffees();
    this.getClassicCoffes();
  }

  getNewCoffees(): void {
    this.coffeeService.getNewCoffees().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.newCoffees = data;
    });
  }

  getClassicCoffes(): void {
    this.coffeeService.getClassicCoffees().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.classicCoffees = data;
    });
  }

  redirectToCoffeeCard(id: number) {
    this.router.navigate(['/coffee-details', id]);
  }
}
