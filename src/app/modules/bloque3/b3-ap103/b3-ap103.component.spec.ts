import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3Ap103Component } from './b3-ap103.component';

describe('B3Ap103Component', () => {
  let component: B3Ap103Component;
  let fixture: ComponentFixture<B3Ap103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B3Ap103Component]
    });
    fixture = TestBed.createComponent(B3Ap103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
