import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        Id: [],
        cartQuantity: 0,
        cartTotal: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartQuantity += action.payload.quantity;
            if (state.Id.includes(action.payload._id)) {
                state.products.map((product) => {
                    if (product._id === action.payload.id) {
                        console.log("found it boss");
                    }
                })
                state.cartTotal += action.payload.price * action.payload.quantity;

            } else {
                state.Id.push(action.payload._id);
                state.products.push(action.payload)
                console.log(state.products)
                state.cartTotal += action.payload.price * action.payload.quantity;
            };
            
        },
    },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;