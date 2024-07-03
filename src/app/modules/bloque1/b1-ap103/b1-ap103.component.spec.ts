import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1Ap103Component } from './b1-ap103.component';

describe('B1Ap103Component', () => {
  let component: B1Ap103Component;
  let fixture: ComponentFixture<B1Ap103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B1Ap103Component]
    });
    fixture = TestBed.createComponent(B1Ap103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
