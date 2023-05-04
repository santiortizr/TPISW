import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDeDebitoComponent } from './tarjeta-de-debito.component';

describe('TarjetaDeDebitoComponent', () => {
  let component: TarjetaDeDebitoComponent;
  let fixture: ComponentFixture<TarjetaDeDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDeDebitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDeDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
