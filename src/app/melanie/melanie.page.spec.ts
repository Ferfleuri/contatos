import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MelaniePage } from './melanie.page';

describe('MelaniePage', () => {
  let component: MelaniePage;
  let fixture: ComponentFixture<MelaniePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MelaniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
