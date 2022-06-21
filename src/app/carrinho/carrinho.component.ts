import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Product } from '../products';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens:Product[] = this.carroServico.getItens(); 

  constructor(private carroServico:CarrinhoService) { }

  ngOnInit(): void {
  }

}
