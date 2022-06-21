import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(produto: Product) {
    window.alert(produto.name + ` Compartilhado!`);
  }

  onNotify() {
    window.alert('Será enviado uma notifcação quando tiver estoque do produto!');
  }
}