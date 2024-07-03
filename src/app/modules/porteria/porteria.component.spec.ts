import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteriaComponent } from './porteria.component';

describe('PorteriaComponent', () => {
  let component: PorteriaComponent;
  let fixture: ComponentFixture<PorteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorteriaComponent]
    });
    fixture = TestBed.createComponent(PorteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
