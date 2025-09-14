import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";

export const selectCartItems = (state: { cart: any; }) => state.cart;

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectCartItems1 = createSelector(
    selectCart,
    (state: CartState) => state);