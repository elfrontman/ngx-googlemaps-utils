import { Injectable, Optional } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

export class NgxGooglemapsViewerServiceConfig{
  apiKey: string = '';
}


@Injectable({
  providedIn: 'root'
})
export class NgxGooglemapsViewerService {

  constructor(@Optional() config?: NgxGooglemapsViewerServiceConfig) {

    if(config){
      this._apiKey = config.apiKey;

      this._loader = new Loader({
        apiKey: this._apiKey,
        version: "weekly",
      });

    }
  }

  get getApiKey(){
    return this._apiKey;
  }

  get getLoader(){
    return this._loader;
  }

  async getMapLibrary(): Promise<google.maps.MapsLibrary>{
    return await this._loader?.importLibrary('maps') as google.maps.MapsLibrary;
  }

  async getMarkerLibrary(): Promise<google.maps.MarkerLibrary>{
    return await this._loader?.importLibrary('marker') as google.maps.MarkerLibrary;
  }

  getNewMapId(length: number = 8){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }


  private _loader?: Loader;
  private _apiKey = '';
}
