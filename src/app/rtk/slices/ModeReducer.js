const { createSlice } = require("@reduxjs/toolkit");

const modeReducer = createSlice({
  initialState: false,
  name: "modeReducer",
  reducers: {
    toggleMode: (state) => {
      return !state;
    },
  },
});

export const { toggleMode } = modeReducer.actions;
export default modeReducer.reducer;
