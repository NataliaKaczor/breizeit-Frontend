import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebensmittelForm } from './lebensmittel-form';

describe('LebensmittelForm', () => {
  let component: LebensmittelForm;
  let fixture: ComponentFixture<LebensmittelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebensmittelForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LebensmittelForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
