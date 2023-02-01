import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = "Restaurant List";
  showAddRestaurant: boolean;
  subscription: Subscription;

  constructor (private uiService: UiService){
    this.subscription = this.uiService.onAddToggle().subscribe(
      (value) => (this.showAddRestaurant = value));
  
  }

  toggleAddRestaurant() {
   this.uiService.toggleAddRestaurant();
  }

}
