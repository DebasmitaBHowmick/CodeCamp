import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productList: [],
    filterList: [],
    inStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
};

function applyFilters (state){
 let products = [...state.productList];
 if (state.inStock){
    products = products.filter((item)=> item.in_stock === true)
 }
 if(state.bestSellerOnly)
    products = products.filter((item)=> item.best_seller === true);

 if(state.ratings)
    products = products.filter((item)=> item.rating >= state.ratings);

    if(state.sortBy === "lowtohigh"){
        products.sort((a,b )=> Number(a.price) - Number(b.price))
    }else if (state.sortBy === "hightolow"){
        products.sort((a,b )=> Number(b.price) - Number(a.price))
    };

    state.filterList = products;
}

 const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setProducts: (state, action)=> {
            state.productList = action.payload
            applyFilters(state)
        },
        setSortBy: (state, action)=> {
            state.sortBy = action.payload
            applyFilters(state)
        },
        setInStock: (state)=> {
            state.inStock = !state.inStock;
            applyFilters(state)
        },
        setBestSellerOnly: (state, )=> {
            state.bestSellerOnly = !state.bestSellerOnly;
            applyFilters(state);
        },
        setRatings:(state, action)=> {
            state.ratings = action.payload;
            applyFilters(state);
        },
        clearFilter:(state)=> {
            state.sortBy=null
            state.inStock = false;
            state.bestSellerOnly = false;
            state.sortBy = null;
            state.ratings = null;
            applyFilters(state);

        }
    }

});

export const {setProducts, setSortBy, setInStock, setBestSellerOnly, setRatings, clearFilter} = FilterSlice.actions;
export default FilterSlice.reducer;

