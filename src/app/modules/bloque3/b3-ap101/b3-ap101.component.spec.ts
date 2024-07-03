import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3Ap101Component } from './b3-ap101.component';

describe('B3Ap101Component', () => {
  let component: B3Ap101Component;
  let fixture: ComponentFixture<B3Ap101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B3Ap101Component]
    });
    fixture = TestBed.createComponent(B3Ap101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
