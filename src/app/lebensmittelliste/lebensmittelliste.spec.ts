import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lebensmittelliste } from './lebensmittelliste';

describe('Lebensmittelliste', () => {
  let component: Lebensmittelliste;
  let fixture: ComponentFixture<Lebensmittelliste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lebensmittelliste],
    }).compileComponents();

    fixture = TestBed.createComponent(Lebensmittelliste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
