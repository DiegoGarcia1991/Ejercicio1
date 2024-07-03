import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3Ap102Component } from './b3-ap102.component';

describe('B3Ap102Component', () => {
  let component: B3Ap102Component;
  let fixture: ComponentFixture<B3Ap102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B3Ap102Component]
    });
    fixture = TestBed.createComponent(B3Ap102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
