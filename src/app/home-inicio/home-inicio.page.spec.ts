import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeInicioPage } from './home-inicio.page';

describe('HomeInicioPage', () => {
  let component: HomeInicioPage;
  let fixture: ComponentFixture<HomeInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
