import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Ap101Component } from './b2-ap101.component';

describe('B2Ap101Component', () => {
  let component: B2Ap101Component;
  let fixture: ComponentFixture<B2Ap101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2Ap101Component]
    });
    fixture = TestBed.createComponent(B2Ap101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
