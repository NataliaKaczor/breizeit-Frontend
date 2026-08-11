import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagebucheintragForm } from './tagebucheintrag-form';

describe('TagebucheintragForm', () => {
  let component: TagebucheintragForm;
  let fixture: ComponentFixture<TagebucheintragForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagebucheintragForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TagebucheintragForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
