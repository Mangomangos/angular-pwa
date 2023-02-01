import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit{



  restaurants: Restaurant[] = [];

  constructor (private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((restaurants) => (this.restaurants = restaurants));
    
  }

  deleteRestaurant(restaurant: Restaurant){
    this.restaurantService
      .deleteRestaurant(restaurant)
      .subscribe(
        () => (this.restaurants = this.restaurants.filter((r) => r.id !== restaurant.id)));

  }

  addRestaurant(restaurant: Restaurant){
    this.restaurantService
      .addRestaurant(restaurant)
      .subscribe(
        (restaurant) => (this.restaurants.push(restaurant)));
    
  }
  
}
