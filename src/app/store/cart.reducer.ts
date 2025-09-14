import { createReducer, on } from "@ngrx/store";
import { addItem, removeItem } from './cart.action';

export interface CartItem {
  productId: number;
  readonly quantity: number;
}

export type CartState = CartItem[];

export const initialState: CartState = [];

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { productId, quantity, price }) => [
    ...state,
    { productId, quantity,price}
  ]),
  on(removeItem , (state, { productId }) => [
    ...state.filter(item => item.productId !== productId)
  ]
));

