import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGooglemapsViewerService } from '../ngx-googlemaps-viewer.service';

@Component({
  selector: 'ngx-googlemaps-info-window',
  template: `<ng-content></ng-content>`,
  styles: [],
  standalone: true
})
export class NgxGooglemapsInfoWindowComponent {

  constructor(
    private element: ElementRef,
    private mapService: NgxGooglemapsViewerService){}

  get getInfoWindow(){
    return this._infoWindow;
  }

  async loadInfoWindow(){
    const { InfoWindow } = await this.mapService.getMapLibrary();
    this._infoWindow = new InfoWindow({
      content: this.element.nativeElement,
    })

    this.element.nativeElement.remove();
  }

  ngAfterViewInit(): void {
    this.loadInfoWindow();

  }

  private _infoWindow?: google.maps.InfoWindow
}
