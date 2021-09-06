import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // acessando os produtos que estão no carrinho para que sejam mostrados no cart component
  items: Product[] = this.cartService.getItems();

  // pegando nome e endereço do usuário
  checkoutForm = this.formBuilder.group({
    name: '', 
    adress: ''
  });

  constructor(
    // precisa passar o cartService no constructor como parâmetro
    private cartService: CartService,
    // injetando  Form Builder service
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    // limpando carrinho
    this.items = this.cartService.clearCart();

    alert("Your order has been submitted");
    this.checkoutForm.reset();

  }
}

