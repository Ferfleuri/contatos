import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GagaPage } from './gaga.page';

describe('GagaPage', () => {
  let component: GagaPage;
  let fixture: ComponentFixture<GagaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
