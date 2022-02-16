import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { coffeeDetailLabels, brewingMethodsLabels } from '../services/coffee.service';
import TITLES from '../../labels/titles.json';
const DEFAULT_COFFEE_IMAGE = '../../assets/images/coffee-bag.png';

@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrls: ['./coffee-page.component.scss']
})
export class CoffeePageComponent implements OnInit {
  sub: any;
  data: any;
  coffee: any;
  imgSrc: string = DEFAULT_COFFEE_IMAGE;
  imgLabel: string = "Coffee bag";
  details: any = [];
  brewingMethod: any = [];
  coffeeDetailLabels = coffeeDetailLabels;
  brewingMethodsLabels = brewingMethodsLabels;
  iconsTitle = TITLES.WybierzSposobParzeniaKawy;
  resultsTitle = TITLES.OtoCoUdaloNamSieZnalezc;

  constructor(private readonly route: ActivatedRoute, private readonly db: AngularFirestore, private readonly router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.db.collection('coffee').doc(params['id']).get().toPromise().then((doc) => {
        if (doc?.exists) {
          this.coffee = doc.data();
          this.details = this.coffeeDetailLabels.map(detail => ({ label: Object.values(detail), value: this.getValue(Object.keys(detail)[0]) || '-' }));
          this.brewingMethod = this.brewingMethodsLabels.map(val => ({ label: Object.values(val)[0], subLabel: Object.values(val)[1], value: this.getValue(Object.keys(val)[0]) || '-' }));
        } else {
          console.warn("No such document!");
        }
      }).catch((error: any) => {
        console.error("Error getting document:", error);
      });
    });
  }

  getValue(detailKey: string): any {
    for (const [key, value] of Object.entries(this.coffee)) {
      if (key === detailKey) return value;
    }
  }

  redirectToCoffeeCard(id: number) {
    this.router.navigate(['/coffee-details', id]);
  }

  showBrewingCards() {
    return !(this.brewingMethod[0]?.value === '-');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
