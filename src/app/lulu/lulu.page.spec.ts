import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LuluPage } from './lulu.page';

describe('LuluPage', () => {
  let component: LuluPage;
  let fixture: ComponentFixture<LuluPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LuluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
