import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreiRezepte } from './brei-rezepte';

describe('BreiRezepte', () => {
  let component: BreiRezepte;
  let fixture: ComponentFixture<BreiRezepte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreiRezepte],
    }).compileComponents();

    fixture = TestBed.createComponent(BreiRezepte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
