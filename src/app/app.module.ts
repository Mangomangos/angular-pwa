import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes: Routes = [
  {path: '', component: RestaurantsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HeaderComponent,
    RestaurantItemComponent,
    ButtonComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
