import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lebensmittelansicht } from './lebensmittelansicht';

describe('Lebensmittelansicht', () => {
  let component: Lebensmittelansicht;
  let fixture: ComponentFixture<Lebensmittelansicht>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lebensmittelansicht],
    }).compileComponents();

    fixture = TestBed.createComponent(Lebensmittelansicht);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
