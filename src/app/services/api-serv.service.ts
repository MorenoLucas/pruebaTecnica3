import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Players } from '../interfaces/players';
@Injectable({
  providedIn: 'root',
})
export class ApiServService {
  private url = 'https://www.balldontlie.io/api/v1/players';
  detailsPlayer;
  constructor(private http: HttpClient) {}
  getPlayer() {
    return this.http.get(this.url);
  }
  // obtengo nave a buscar
  setPlayerDetails(id) {
    let url = `https://www.balldontlie.io/api/v1/players/${id}`;

    this.detailsPlayer = this.http.get<Players>(url);
  }
  // muestro nave
  getPlayerDetails(): Observable<Players> {
    return this.detailsPlayer;
  }
}
