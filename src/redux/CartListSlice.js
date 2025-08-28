import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cartList: [],
    total: 0
};

const cartListSlice = createSlice({
    name: "cart",
   initialState,
    reducers: {
        AddToCart: (state, action)=>{
            //state.cartList = [...state.cartList,action.payload ]
            //state.cartList.push(action.payload);   //mutablae immer

            //for updation of the quantity of the product
            const item = state.cartList.find((i)=> i.id ===action.payload.id);
            if(item){
                item.quantity+=1
            }else {
            state.cartList.push({ ...action.payload, quantity: 1 }) };

            //updation ofa total automatically
            state.total = state.cartList.reduce(
            (sum, item) => sum + item.price * item.quantity,
        0
      );
        },
        removeCart: (state, action)=>{
            state.cartList = state.cartList.filter((item) => 
            item.id !== action.payload)

             // recalc total after removal
            state.total = state.cartList.reduce(
            (sum, item) => sum + item.price * item.quantity,
        0
      );
        },
        clearCart:()=> ({...initialState})
    }
})


export const {AddToCart, removeCart, clearCart}= cartListSlice.actions;
export default cartListSlice.reducer