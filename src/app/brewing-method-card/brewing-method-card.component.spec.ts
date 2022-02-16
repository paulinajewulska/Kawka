import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewingMethodCardComponent } from './brewing-method-card.component';

describe('BrewingMethodCardComponent', () => {
  let component: BrewingMethodCardComponent;
  let fixture: ComponentFixture<BrewingMethodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewingMethodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewingMethodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
