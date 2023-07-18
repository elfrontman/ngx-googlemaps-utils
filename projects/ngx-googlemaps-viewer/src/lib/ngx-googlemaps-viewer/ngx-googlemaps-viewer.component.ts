import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';
import { NgxGooglemapsViewerService } from '../ngx-googlemaps-viewer.service';
import { NgxGooglemapsMarkerComponent } from '../ngx-googlemaps-marker/ngx-googlemaps-marker.component';

@Component({
    selector: 'ngx-googlemaps-map',
    template: `
      <div id="mapContent" #mapContent></div>
      <ng-content></ng-content>
    `,
    styles: ['#mapContent {width: 100%; height: 100%;} '],
    standalone: true
})
export class NgxGooglemapsViewerComponent {

  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() zoom: number = 14;
  @ViewChild('mapContent') mapContent?: ElementRef;
  @ContentChildren(NgxGooglemapsMarkerComponent) markers?: QueryList<NgxGooglemapsMarkerComponent>;

  key = '';
  map?: google.maps.Map;
  config?: google.maps.MapOptions

  constructor(private mapService: NgxGooglemapsViewerService){
    this.key = this.mapService.getApiKey;
  }

  private async loadMap(){

    this.config = {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: this.zoom,
      mapId: this.mapService.getNewMapId()
    }

    const { Map } = await this.mapService.getMapLibrary();
    this.map = new Map(this.mapContent?.nativeElement as HTMLElement, this.config);
    this.loadMarkers();
  }

  private loadMarkers(){
    this.markers?.forEach( marker => {
      marker.setMap = this.map!;
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadMap();
  }
}
