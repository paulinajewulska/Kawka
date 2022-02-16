import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export interface Coffee {
  name: string;
  origin: string;
  roaster: string;
  added_at?: string;
  treatment?: string;
  adacity?: string;
  id?: string;
  brewingMetods?: Array<any>;
}

export const coffeeDetailLabels = [
  { origin: 'Kraj pochodzenia:' },
  { roaster: 'Palarnia:' },
  { profile: 'Profil sensoryczny:' },
  { treatment: 'Obróbka:' },
  { acidity: 'Kwasowość:' },
  { degree: 'Stopień palenia:' }];

export const brewingMethodsLabels = [
  { method: 'Metoda:', sublabel: '' },
  { waterTemp: 'Temperatura wody:', sublabel: 'C' },
  { waterAmount: 'Ilość wody:', sublabel: 'ml' },
  { coffeeAmount: 'Ilość kawy:', sublabel: 'g' },
  { time: 'Czas parzenia:', sublabel: '' }];

export const brewingMethodsIcons = [
  { src: '../../assets/icons/coffee-nav/aeropress.png', alt: 'Aeropress icon', brewingType: 'aeropress' },
  { src: '../../assets/icons/coffee-nav/chemex.png', alt: 'Chemex icon', brewingType: 'chemex' },
  { src: '../../assets/icons/coffee-nav/drip.png', alt: 'Drip icon', brewingType: 'drip' },
  { src: '../../assets/icons/coffee-nav/french-press.png', alt: 'French press icon', brewingType: 'frenchPress' },
  { src: '../../assets/icons/coffee-nav/moka-pot.png', alt: 'Moka pot icon', brewingType: 'mokaPot' },
  { src: '../../assets/icons/coffee-nav/portafilter.png', alt: 'Portafilter icon', brewingType: 'portafilter' }];

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffeesPath = 'coffee';
  coffeesRef: AngularFirestoreCollection<Coffee>;

  constructor(private db: AngularFirestore) {
    this.coffeesRef = db.collection(this.coffeesPath);
  }

  getAll(): AngularFirestoreCollection<Coffee> {
    return this.db.collection(this.coffeesPath);
  }

  getNewCoffees(): AngularFirestoreCollection<Coffee> {
    return this.db.collection(this.coffeesPath, c => c.orderBy('added_at', 'desc').limit(4));
  }

  getClassicCoffees(): AngularFirestoreCollection<Coffee> {
    return this.db.collection(this.coffeesPath, c => c.orderBy('added_at', 'asc').limit(4));
  }
}
