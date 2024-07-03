import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Ap102Component } from './b2-ap102.component';

describe('B2Ap102Component', () => {
  let component: B2Ap102Component;
  let fixture: ComponentFixture<B2Ap102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2Ap102Component]
    });
    fixture = TestBed.createComponent(B2Ap102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
