import { TestBed } from '@angular/core/testing';

import { NgxGooglemapsViewerService } from './ngx-googlemaps-viewer.service';

describe('NgxGooglemapsViewerService', () => {
  let service: NgxGooglemapsViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGooglemapsViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
