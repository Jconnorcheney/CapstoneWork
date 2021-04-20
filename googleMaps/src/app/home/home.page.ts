import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { AfterContentInit, Component, ViewChild, OnInit, ElementRef, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
declare var google: any;






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Injectable()
export class HomePage{
  
  //@ViewChild('map', {read: ElementRef, static:true }) mapRef: ElementRef;
  @ViewChild ('map',{static:true}) mapRef:ElementRef;
  infoWindows: any [];
  markers: any = [];
  lat: any;
  long: any;
  map: any;
  public static lat;
  public static long;
  
  constructor(public navCtrl:NavController, public geo:Geolocation, private router:Router) {
    this.getGeoLocation();
  }
  
  // ionViewDidEnter(){
  //   this.showMap();
  // }
  getGeoLocation(){
    this.geo.getCurrentPosition({maximumAge: 5000, timeout: 5000, 
      enableHighAccuracy: false})
            .then((resp) => {
              if(resp){
                this.lat = resp.coords.latitude;
                this.long = resp.coords.longitude;
                this.showMap();
              }
             }).catch((error) => {
                 console.log('Error getting location', error);
             });






    // ).then((resp)=>{
    //   if(resp){
    //     this.lat = resp.coords.latitude;
    //     this.long = resp.coords.longitude;
    //   }
    // }).catch((error)=>{
    //   console.log("Error, unable to get geolocation.",error);
    // })
  }
  showMap(){
    const location = new google.maps.LatLng(this.lat, this.long)
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    this.map.addListener(this.map,'bounds_changed',()=>{
      searchBox.setBounds(this.map.getBounds());
    });
    var markers=[];
    searchBox.addListener("places-changed",function(){
      var places = searchBox.getPlaces();
      if(places.length==0){
        return;
      }
      markers.forEach(function(marker){
        marker.setMap(null);
      });
      markers=[];
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place){
        HomePage.lat = place.geometry.viewport.Ya.i;
        HomePage.long = place.geometry.viewport.Ua.i;
        if(!place.geometry){
          console.log("Unable to locate Geometric location");
          return;
        }

        var icon = {
          url:place.icon,
          size: new google.maps.Size(71,71),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(17,34),
          scaledSize: new google.maps.Size(25,25)
        };
        markers.push(new google.maps.Marker({
          map:this.map,
          icon:icon,
          title:place.name,
          posistion: place.geometry.location
        }));
        if(place.geometry.viewport){
          bounds.union(place.geomerty.viewport);
        }else{
          bounds.extend(place.geometry.location);
        }

      });
      this.map.fitBounds(bounds);
    });
    
  }
}


