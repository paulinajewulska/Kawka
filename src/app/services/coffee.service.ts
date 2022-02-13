import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

interface Coffee {
  Name?: string;
  Origin?: string;
  Roaster?: string;
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
    return this.db.collection(this.coffeesPath, c => c.limit(4));
  }

  getNewCoffees(): AngularFirestoreCollection<Coffee> {
    return this.db.collection(this.coffeesPath, c => c.orderBy('added_at', 'desc').limit(4));
  }

  getClassicCoffees(): AngularFirestoreCollection<Coffee> {
    return this.db.collection(this.coffeesPath, c => c.orderBy('added_at', 'asc').limit(4));
  }
}
