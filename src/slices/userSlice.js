import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: () => {},
});
