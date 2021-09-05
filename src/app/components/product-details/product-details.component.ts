import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  cartService: CartService = new CartService();

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // pegando o product id da route atual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // achando o produto que corresponde com o id que recebemos
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  buyProduct(product: Product) {
    // usando a função para adicionar o produto ao carrinho quando o usuario chamar buyProduct ao clicar para comprar 
    this.cartService.addToCart(product);
    window.alert("Your product has been added to your cart!");
  }

}
