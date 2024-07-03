import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1Ap102Component } from './b1-ap102.component';

describe('B1Ap102Component', () => {
  let component: B1Ap102Component;
  let fixture: ComponentFixture<B1Ap102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B1Ap102Component]
    });
    fixture = TestBed.createComponent(B1Ap102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
