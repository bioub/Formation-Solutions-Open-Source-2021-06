import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHelloworldComponent } from './ex-helloworld.component';

describe('ExHelloworldComponent', () => {
  let component: ExHelloworldComponent;
  let fixture: ComponentFixture<ExHelloworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExHelloworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExHelloworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
