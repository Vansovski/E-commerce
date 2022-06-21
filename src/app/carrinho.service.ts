import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  //Itens do carrinho
  itens:Product[] = [];

  constructor(private http: HttpClient) { }

  //Adicionar ao carrinho
  addProduto(produto:Product):void
  {
    this.itens.push(produto);
  }

  //Obter produtos
  getItens()
  {
    return this.itens;
  }

  //Esvaziar Carrinho   
  esvazia()
  {
    this.itens = [];
    return this.itens;
  }

  //Preços de Entrega 
  getPrecosEntrega() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
