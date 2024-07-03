import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Ap103Component } from './b2-ap103.component';

describe('B2Ap103Component', () => {
  let component: B2Ap103Component;
  let fixture: ComponentFixture<B2Ap103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2Ap103Component]
    });
    fixture = TestBed.createComponent(B2Ap103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
