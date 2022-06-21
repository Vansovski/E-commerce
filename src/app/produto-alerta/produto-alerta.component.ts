import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-produto-alerta',
  templateUrl: './produto-alerta.component.html',
  styleUrls: ['./produto-alerta.component.css']
})
export class ProdutoAlertaComponent implements OnInit {

  @Input() produto!: Product;
  @Output() notificar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
