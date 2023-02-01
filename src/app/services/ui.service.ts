import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Restaurant } from 'src/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddRestaurant: boolean = false;
  private addSubject = new Subject<any>();

  constructor() { }

  toggleAddRestaurant(): void {
    this.showAddRestaurant = !this.showAddRestaurant;
    this.addSubject.next(this.showAddRestaurant);
  }

  onAddToggle(): Observable<any> {
    return this.addSubject.asObservable();
  }
}
