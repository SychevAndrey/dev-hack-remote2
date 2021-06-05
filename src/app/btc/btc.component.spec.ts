import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTCComponent } from './btc.component';

describe('BTCComponent', () => {
  let component: BTCComponent;
  let fixture: ComponentFixture<BTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
