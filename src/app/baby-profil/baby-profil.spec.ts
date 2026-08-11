import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyProfil } from './baby-profil';

describe('BabyProfil', () => {
  let component: BabyProfil;
  let fixture: ComponentFixture<BabyProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BabyProfil],
    }).compileComponents();

    fixture = TestBed.createComponent(BabyProfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
