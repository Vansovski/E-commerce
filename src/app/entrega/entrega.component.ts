import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {
  
  //Custos de entrega
  custosEntrega!: Observable<{type: string, price: number}[]>;

  constructor(private carrinhoServico: CarrinhoService) { }

  ngOnInit(): void {

    this.custosEntrega = this.carrinhoServico.getPrecosEntrega();

  }

}
