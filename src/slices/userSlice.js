import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = console.log(action.payload);
    },
  },
  //extraReducers: () => {},
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
