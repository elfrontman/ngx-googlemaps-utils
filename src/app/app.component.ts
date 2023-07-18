import { Component } from '@angular/core';
import { NgxGooglemapsViewerComponent, NgxGooglemapsViewerModule } from 'ngx-googlemaps-viewer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgxGooglemapsViewerModule]
})
export class AppComponent {
  title = 'ngx-googlemaps-utils';
  coordenate = {
    'lat': 25.7955711,
    'lng': -80.2475424,
  }

}
