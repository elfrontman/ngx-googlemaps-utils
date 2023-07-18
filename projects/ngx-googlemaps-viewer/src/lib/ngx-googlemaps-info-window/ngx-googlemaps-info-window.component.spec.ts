import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGooglemapsInfoWindowComponent } from './ngx-googlemaps-info-window.component';

describe('NgxGooglemapsInfoWindowComponent', () => {
  let component: NgxGooglemapsInfoWindowComponent;
  let fixture: ComponentFixture<NgxGooglemapsInfoWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxGooglemapsInfoWindowComponent]
    });
    fixture = TestBed.createComponent(NgxGooglemapsInfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
