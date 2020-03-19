import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  title = 'angular-gmap';
  map: google.maps.Map;
  lat = 42.3493407;
  lng = -71.07512609999999;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 12,
  };

//  apiMarkers: any = [];

  constructor(private api: ApiService) {}

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    this.getMapMarkers();
  }

   ngAfterViewInit() {
    this.mapInitializer();
    }

  getMapMarkers() {
    this.api.getMapMarkers()
      .subscribe(data => {
        for (const d of (data as any)) {

          const myLatlng = new google.maps.LatLng(d.lat, d.lng);

          const marker = new google.maps.Marker({
            position: myLatlng,
            title: d.title,
            icon: d.icon
          });

                //creating a new info window with markers info
          const infoWindow = new google.maps.InfoWindow({
            content: marker.getTitle().concat(d.address)
          });

                //Add click event to open info window on marker
          marker.addListener("click", () => {
            infoWindow.open(marker.getMap(), marker);
          });

          marker.setMap(this.map);
      }
    });
  }
}
