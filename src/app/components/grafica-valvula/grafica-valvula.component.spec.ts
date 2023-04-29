import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaValvulaComponent } from './grafica-valvula.component';

describe('GraficaValvulaComponent', () => {
  let component: GraficaValvulaComponent;
  let fixture: ComponentFixture<GraficaValvulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaValvulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaValvulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
