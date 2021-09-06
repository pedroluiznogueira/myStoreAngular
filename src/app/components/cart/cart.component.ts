import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // acessando os produtos que estão no carrinho para que sejam mostrados no cart component
  items: Product[] = this.cartService.getItems();

  constructor(
    // precisa passar o cartService no constructor como parâmetro
    private cartService: CartService
  ) {}

  ngOnInit(): void {
  }
}

