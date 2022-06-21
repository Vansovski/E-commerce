import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CarrinhoService } from "../carrinho.service";
import { Product } from "../products";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.component.html",
  styleUrls: ["./carrinho.component.css"],
})
export class CarrinhoComponent implements OnInit {

  itens: Product[] = this.carroServico.getItens();

  form = this.fb.group(
    {
      nome:'',
      end:''
    }
  );

  constructor(private carroServico: CarrinhoService, 
              private fb: FormBuilder) {}

  ngOnInit(): void {}


  OnSubmit():void
  {
    //Processa o carrinho de compras 
    this.itens = this.carroServico.esvazia();
    console.warn('Pedido Enviado!', this.form.value);
    this.form.reset();
  }
}
