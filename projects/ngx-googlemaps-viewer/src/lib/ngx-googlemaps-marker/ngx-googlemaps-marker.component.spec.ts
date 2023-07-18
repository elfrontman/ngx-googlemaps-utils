import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGooglemapsMarkerComponent } from './ngx-googlemaps-marker.component';

describe('NgxGooglemapsMarkerComponent', () => {
  let component: NgxGooglemapsMarkerComponent;
  let fixture: ComponentFixture<NgxGooglemapsMarkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxGooglemapsMarkerComponent]
    });
    fixture = TestBed.createComponent(NgxGooglemapsMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
