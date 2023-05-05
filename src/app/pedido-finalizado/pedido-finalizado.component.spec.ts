import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoFinalizadoComponent } from './pedido-finalizado.component';

describe('PedidoFinalizadoComponent', () => {
  let component: PedidoFinalizadoComponent;
  let fixture: ComponentFixture<PedidoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoFinalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
