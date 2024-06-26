import productsReducer from "./slices/productsReducer";
const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./slices/cartReducer";
import modeReducer from "./slices/ModeReducer";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,

    mode: modeReducer,
  },
});

export default store;
