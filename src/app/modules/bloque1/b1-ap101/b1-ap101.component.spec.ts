import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1Ap101Component } from './b1-ap101.component';

describe('B1Ap101Component', () => {
  let component: B1Ap101Component;
  let fixture: ComponentFixture<B1Ap101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B1Ap101Component]
    });
    fixture = TestBed.createComponent(B1Ap101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
