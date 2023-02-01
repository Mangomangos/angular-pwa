import { Component, EventEmitter, Output } from '@angular/core';
import { Restaurant } from 'src/Restaurant';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  @Output() onAddRestaurant: EventEmitter<Restaurant> = new EventEmitter();
  id: string;
  name: string;
  description: string;
  address: string;
  showAddRestaurant: boolean;
  subscription: Subscription;

  constructor (private uiService: UiService){
    this.subscription = this.uiService.onAddToggle().subscribe(
      (value) => (this.showAddRestaurant = value)
    );

  }

  onSubmit(){
    if(!this.id){
      alert('Please add an id');
      return;
    }
    if(!this.name){
      alert('Please add restaurant name');
      return;
    }

    const newRestaurant = {
      id: this.id,
      name: this.name,
      description: this.description,
      address: this.address
    }

    this.onAddRestaurant.emit(newRestaurant);

    this.id = '';
    this.name = '';
    this.description = '';
    this.address = '';
  }

}
