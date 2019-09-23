import { Component, ViewChild } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: GoogleMap;
  @ViewChild('mapElement', {static: false}) home: HomePage;
  // tslint:disable-next-line: variable-name
  private _mapElement: {
    nativeElement: any;
  };
  public get mapElement():{
    nativeElement: any;
  } {
    return this._mapElement;
  }
  public set mapElement(value:{
    nativeElement: any;
  }){
    this._mapElement = value;
  }
  constructor() {}
  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: '(AIzaSyC40j6ItrFinhgURPaOd-fEAzluFVYwUUo)',
      API_KEY_FOR_BROWSER_DEBUG: '(AIzaSyC40j6ItrFinhgURPaOd-fEAzluFVYwUUo)'
    });

    // tslint:disable-next-line: prefer-const
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // tslint:disable-next-line: prefer-const
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}
