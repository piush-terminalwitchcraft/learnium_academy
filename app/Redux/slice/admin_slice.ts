import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminState } from "./dto";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";


export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isAdmin: false,
    authToken: null,
    loading: false,
    error: null,
    success: null,
    message: null
  } as AdminState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }

  },
  extraReducers: {

  }
})

export const adminLogin = createAsyncThunk<any, any>(
  'admin/login',
  async (payload, thunkAPI) => {
    try {
      const {email, password} = payload; 
      const res = await axios.post(`${BASE_URL}/admin/auth`)  
    } catch (error) {
      throw error; 
    } 
  }
)

export const adminReducer =  adminSlice.reducer;
