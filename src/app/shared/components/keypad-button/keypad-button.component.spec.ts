import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypadButtonComponent } from './keypad-button.component';

describe('KeypadButtonComponent', () => {
  let component: KeypadButtonComponent;
  let fixture: ComponentFixture<KeypadButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeypadButtonComponent]
    });
    fixture = TestBed.createComponent(KeypadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
