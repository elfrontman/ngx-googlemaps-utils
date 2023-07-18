import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxGooglemapsViewerComponent } from './ngx-googlemaps-viewer/ngx-googlemaps-viewer.component';
import { NgxGooglemapsMarkerComponent } from './ngx-googlemaps-marker/ngx-googlemaps-marker.component';
import { NgxGooglemapsInfoWindowComponent } from './ngx-googlemaps-info-window/ngx-googlemaps-info-window.component'

import {
  NgxGooglemapsViewerServiceConfig,
  NgxGooglemapsViewerService
} from './ngx-googlemaps-viewer.service';




@NgModule({
    imports: [
        NgxGooglemapsViewerComponent,
        NgxGooglemapsMarkerComponent,
        NgxGooglemapsInfoWindowComponent
    ],
    exports: [
        NgxGooglemapsViewerComponent,
        NgxGooglemapsMarkerComponent,
        NgxGooglemapsInfoWindowComponent
    ],
    providers: [
      NgxGooglemapsViewerService
    ]
})
export class NgxGooglemapsViewerModule {
  static forRoot(config: NgxGooglemapsViewerServiceConfig): ModuleWithProviders<NgxGooglemapsViewerModule> {
    return {
      ngModule: NgxGooglemapsViewerModule,
      providers: [
        {provide: NgxGooglemapsViewerServiceConfig, useValue: config}
      ]
    }
  }
}
