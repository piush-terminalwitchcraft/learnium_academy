import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authToken: null,
    loading: false,
    error: null,
    success: null,
    message: null
  },
  reducers: {

  },
  extraReducers: {

  }
})

export const userReducer = userSlice.reducer;
