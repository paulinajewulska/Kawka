import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export interface Coffee {
  name: string;
  origin: string;
  roaster: string;
  added_at?: string;
  treatment?: string;
  degree?: string;
}

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
