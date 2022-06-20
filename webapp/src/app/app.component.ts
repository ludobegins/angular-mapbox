import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-mapbox';
  map!: Mapboxgl.Map;
  draw!: MapboxDraw;

  ngOnInit() {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
    
    // Add zoom and rotation controls to the map.
    this.map.addControl(new Mapboxgl.NavigationControl());

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
      polygon: true,
      trash: true
      },
      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
      defaultMode: 'draw_polygon'
      });
      this.map.addControl(this.draw);
  }

}
