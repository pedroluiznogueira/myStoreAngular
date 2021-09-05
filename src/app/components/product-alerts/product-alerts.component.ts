import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // pegando dados do componente pai
  @Input("a") product!: Product;
  // passando dados para o componente pai
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
