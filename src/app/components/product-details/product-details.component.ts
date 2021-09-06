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

  constructor(
    private route: ActivatedRoute,
    // precisa passar o cartService no constructor como parâmetro
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
    // pegando o product id da route atual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // achando o produto que corresponde com o id que recebemos
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  buyProduct(product: Product) {
    // adicionando o produto no carrinho de produtos do serviço
    this.cartService.addToCart(product);
    // window.alert("Your product has been added to the cart!");
  }

}
