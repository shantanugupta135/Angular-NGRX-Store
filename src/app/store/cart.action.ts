import { createAction, props } from "@ngrx/store";

export const addItem = createAction('[Cart] Add to cart', 
    props<{ productId: number, quantity: number, price:number}>()
);

export const removeItem = createAction('[Cart] Remove from cart', 
    props<{ productId: number }>()
);
