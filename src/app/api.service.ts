import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "http://localhost:5000/map";

  constructor(private http: HttpClient) {}

  getMapMarkers() {
    return this.http.get(this.REST_API_SERVER);
  }
}
