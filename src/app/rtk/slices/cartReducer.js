const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const token =
  "6502ca8873b868b276695bc51552ae4f7ac9a30a18823a1798988250c68e4506128bc98e496d475e00283d1824fd882d3c5b76a4a838c06bb990ab0fac14c2da7a0e4b71cada751094d0d2841244faf2623247232b5365dbe3c201f0e214dcefc2920a83748a1c5844b0c83f5c43f1517c1fce39e10fa1a8e00744a47ce7fa1d";
export const fetchCartInfi = createAsyncThunk(
  "cartReducer/fetchCartInfi",
  async (Email) => {
    const res = await fetch(
      `https://tremendous-peace-f46153071d.strapiapp.com/api/carts?populate[products][populate]=*&filters[Email][$eq]=${Email}`,
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
const plusQuantity = (state, oneCart) => {
  const cart = state.find((item) => item.id === oneCart.id);
  cart.attributes.quantity += 1;
  fetch(
    `https://tremendous-peace-f46153071d.strapiapp.com/api/carts/${oneCart.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { quantity: cart.attributes.quantity } }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const cartReducer = createSlice({
  initialState: [],
  name: "cartReducer",
  reducers: {
    addToCart: (state, action) => {
      const findCart = state.find(
        (item) =>
          item?.attributes?.products?.data[0]?.id ===
          action.payload?.products[0]
      );
      console.log(findCart);
      if (!findCart) {
        fetch("https://tremendous-peace-f46153071d.strapiapp.com/api/carts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: action.payload }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {
        console.log("founded cart");
        plusQuantity(state, findCart);
      }
    },
    removeFromCart: (state, action) => {
      fetch(
        `https://tremendous-peace-f46153071d.strapiapp.com/api/carts/${action.payload.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      plusQuantity(state, action.payload);
    },
    decrementQuantity: (state, action) => {
      const cart = state.find((item) => item.id === action.payload.id);
      if (cart.attributes.quantity > 1) {
        cart.attributes.quantity -= 1;
        fetch(
          `https://tremendous-peace-f46153071d.strapiapp.com/api/carts/${action.payload.id}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: { quantity: cart.attributes.quantity },
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {
        return console.log("quantity must be greater than 0");
      }
    },
  },
  extraReducers: async (builder) => {
    builder.addCase(fetchCartInfi.fulfilled, (state, action) => {
      return action.payload.data;
    });
  },
});

export const {
  addToCart,
  incrementQuantity,
  removeFromCart,
  decrementQuantity,
} = cartReducer.actions;
export default cartReducer.reducer;
