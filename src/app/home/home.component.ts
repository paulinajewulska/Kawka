import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import TITLES from '../../labels/titles.json';
import { CoffeeService } from '../coffee.service';

interface Coffee {
  Name?: string;
  Origin?: string;
  Roaster?: string;
}

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
  constructor(private readonly coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.getNewCoffees();
    this.getClassicCoffes();
  }

  getNewCoffees(): void {
    this.coffeeService.getAll().snapshotChanges().pipe(
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
    this.coffeeService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.classicCoffees = data;
    });
  }
}
