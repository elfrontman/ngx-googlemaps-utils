import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGooglemapsViewerComponent } from './ngx-googlemaps-viewer.component';

describe('NgxGooglemapsViewerComponent', () => {
  let component: NgxGooglemapsViewerComponent;
  let fixture: ComponentFixture<NgxGooglemapsViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [NgxGooglemapsViewerComponent]
});
    fixture = TestBed.createComponent(NgxGooglemapsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
