import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './component/cart/cart';
import { ProductList } from './component/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Cart, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrx-cart');
}
