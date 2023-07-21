import { Component, ContentChild, Input } from '@angular/core';
import { NgxGooglemapsViewerService } from '../ngx-googlemaps-viewer.service';
import { NgxGooglemapsInfoWindowComponent } from '../ngx-googlemaps-info-window/ngx-googlemaps-info-window.component';

@Component({
  selector: 'ngx-googlemaps-marker',
  template: `<ng-content></ng-content>`,
  styles: [],
  standalone: true
})
export class NgxGooglemapsMarkerComponent {

  @ContentChild(NgxGooglemapsInfoWindowComponent) infoWindow?: NgxGooglemapsInfoWindowComponent;

  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() title: string = '';


  get getMap(){
    return this._map;
  }

  set setMap(map: google.maps.Map){
    this._map = map
    this.loadMarker();
  }

  constructor(private mapService: NgxGooglemapsViewerService){}

  private async loadMarker(){
    const { AdvancedMarkerElement } = await this.mapService.getMarkerLibrary();

    if(isNaN(this.latitude) || isNaN(this.longitude)){
      return;
    }

    this._marker = new AdvancedMarkerElement({
      map: this._map,
      title: this.title,
      position: {
        lat: this.latitude,
        lng: this.longitude
      }
    })

    this._marker.addListener('click', async () => {
      const _infoWindow = await this.infoWindow?.getInfoWindow;
      _infoWindow?.open(this._map, this._marker);
    });
  }

  ngAfterViewInit(): void {

  }

  private _marker?: google.maps.marker.AdvancedMarkerElement
  private _map?: google.maps.Map;
}
