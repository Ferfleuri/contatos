import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekndPage } from './weeknd.page';

describe('WeekndPage', () => {
  let component: WeekndPage;
  let fixture: ComponentFixture<WeekndPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeekndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
