import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAlertaComponent } from './produto-alerta.component';

describe('ProdutoAlertaComponent', () => {
  let component: ProdutoAlertaComponent;
  let fixture: ComponentFixture<ProdutoAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAlertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
