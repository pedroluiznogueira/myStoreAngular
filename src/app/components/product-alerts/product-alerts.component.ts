import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input("a") product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
