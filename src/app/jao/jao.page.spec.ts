import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaoPage } from './jao.page';

describe('JaoPage', () => {
  let component: JaoPage;
  let fixture: ComponentFixture<JaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
