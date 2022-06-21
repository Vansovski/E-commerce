import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";

@Component({
  selector: "app-produto-detalhes",
  templateUrl: "./produto-detalhes.component.html",
  styleUrls: ["./produto-detalhes.component.css"],
})
export class ProdutoDetalhesComponent implements OnInit {
  produto: Product | undefined;

  //Injeçao para intergir com a rota
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Obter Id do Produto pela Url
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("produtoId"));

    //Obter o produto correspondente
    this.produto = products.find(
      (produto) => produto.id === produtoId
    );
  }
}
