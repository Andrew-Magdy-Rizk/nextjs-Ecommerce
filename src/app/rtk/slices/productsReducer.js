const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const token =
  "6502ca8873b868b276695bc51552ae4f7ac9a30a18823a1798988250c68e4506128bc98e496d475e00283d1824fd882d3c5b76a4a838c06bb990ab0fac14c2da7a0e4b71cada751094d0d2841244faf2623247232b5365dbe3c201f0e214dcefc2920a83748a1c5844b0c83f5c43f1517c1fce39e10fa1a8e00744a47ce7fa1d";
export const fetchProducts = createAsyncThunk(
  "productsreducer/fetchProducts",
  async () => {
    const res = await fetch(
      "https://tremendous-peace-f46153071d.strapiapp.com/api/products?populate=*",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  }
);
const productsReducer = createSlice({
  initialState: [],
  name: "productsReducer",
  reducers: {
    filterProduct: (state, action) => {
      return state.filter(
        (product) =>
          product?.attributes?.product_Category ===
            action.payload?.attributes?.product_Category &&
          product?.id !== action.payload?.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload.data;
    });
  },
});
export const { filterProduct } = productsReducer.actions;
export default productsReducer.reducer;
