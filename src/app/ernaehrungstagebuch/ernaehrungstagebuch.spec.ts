import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ernaehrungstagebuch } from './ernaehrungstagebuch';

describe('Ernaehrungstagebuch', () => {
  let component: Ernaehrungstagebuch;
  let fixture: ComponentFixture<Ernaehrungstagebuch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ernaehrungstagebuch],
    }).compileComponents();

    fixture = TestBed.createComponent(Ernaehrungstagebuch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
