import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgxGooglemapsViewerModule } from 'ngx-googlemaps-viewer';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      NgxGooglemapsViewerModule.forRoot({apiKey: 'AIzaSyBE4Ez0EZ8eVhA1UMjqNgjnDnj1MvaW-LQ'}))]
})
  .catch(err => console.error(err));
