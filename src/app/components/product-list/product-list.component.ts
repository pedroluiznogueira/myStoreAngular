import { Component } from '@angular/core';
import { products } from 'src/app/Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // passando o array de products para esse componente
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  // função chamada ao escutar Event Emmiter
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/