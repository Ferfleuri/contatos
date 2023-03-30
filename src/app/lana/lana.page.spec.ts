import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanaPage } from './lana.page';

describe('LanaPage', () => {
  let component: LanaPage;
  let fixture: ComponentFixture<LanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
