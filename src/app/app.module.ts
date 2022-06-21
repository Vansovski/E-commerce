import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProdutoAlertaComponent } from './produto-alerta/produto-alerta.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HttpClientModule } from '@angular/common/http';
import { EntregaComponent } from './entrega/entrega.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'produtos/:produtoId', component: ProdutoDetalhesComponent},
      { path: 'carrinho', component: CarrinhoComponent},
      { path: 'entrega', component: EntregaComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProdutoAlertaComponent,
    ProdutoDetalhesComponent,
    CarrinhoComponent,
    EntregaComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/