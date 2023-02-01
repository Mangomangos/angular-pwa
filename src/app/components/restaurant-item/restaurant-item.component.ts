import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from 'src/Restaurant';
import { faTimes, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent {
  @Input() restaurant: Restaurant;
  @Output() onDeleteRestaurant: EventEmitter<Restaurant> = new EventEmitter();
  @Output() onToggleAddress: EventEmitter<Restaurant> = new EventEmitter();
  faTimes = faTimes;
  faLocationDot = faLocationDot;
  showAddress = false;


  onDelete(restaurant: Restaurant) {
    this.onDeleteRestaurant.emit(restaurant);
  }

  toggleViewAddress(restaurant: Restaurant){
    this.showAddress = !this.showAddress
  }

}
