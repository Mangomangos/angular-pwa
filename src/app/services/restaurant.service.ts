import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/Restaurant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'http://localhost:8083/restaurants'

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant []>{
    return this.http.get<Restaurant[]>(this.apiUrl)
  }

  deleteRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    const url = `${this.apiUrl}/${restaurant.id}`
    return this.http.delete<Restaurant>(url);
  }

  getRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    const url = `${this.apiUrl}/${restaurant.id}`
    return this.http.get<Restaurant>(url);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.apiUrl, restaurant, httpOptions);

  }
}
