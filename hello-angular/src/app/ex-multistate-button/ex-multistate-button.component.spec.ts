import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMultistateButtonComponent } from './ex-multistate-button.component';

describe('ExMultistateButtonComponent', () => {
  let component: ExMultistateButtonComponent;
  let fixture: ComponentFixture<ExMultistateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExMultistateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMultistateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
