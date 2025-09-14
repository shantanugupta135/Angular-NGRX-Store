import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems1 } from '../../store/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { removeItem } from '../../store/cart.action';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

 cartItems$: Observable<any[]>;

  constructor(private store:Store) {
     this.cartItems$ = this.store.select(selectCartItems1);
   }

   removeFromCart(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }
}
