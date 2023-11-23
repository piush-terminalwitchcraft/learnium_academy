import { PayloadAction, createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { AdminState } from "./dto";
import axios from "axios";
import { BASE_URL } from "@/app/utils/constant";
import { RootState } from "../store";
import { stat } from "fs";


export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isAdmin: false,
    isRootAdmin: false,
    authToken: null,
    loading: false,
    error: null,
    success: null,
    message: null
  } as AdminState,
  reducers: {

    initialize: (state, action: any) => {
        state.isAdmin = false
        state.authToken = null
        state.isRootAdmin = false
        state.loading = false
        state.error = null
        state.success = null
        state.message = null
      console.log('state update after initialize', current(state))
    },
    setSuccess: (state, action: PayloadAction<string | null>) => {
      state.success = action.payload;
      console.log('state update after set success', current(state))
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      console.log('state update after set error', current(state))
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }, 

  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.isAdmin = true;
      state.loading = false;
      state.success = "logged in successfully";
      state.authToken = action.payload.access_token;
      console.log('state updated after successfull admin login', current(state))
    } )

    builder.addCase(adminLogin.pending, (state,_) => {
      state.loading = true;
    })

    builder.addCase(adminLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
      console.log('state update after failure admin login', current(state))
    })
  }
})

export const adminLogin = createAsyncThunk<any, any>(
  'admin/login',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/admin/auth/signin`, payload)  
      return res.data as {access_token : string}; 

    } catch (error) {
      throw error as string; 
    } 
  }
)

export const adminAddArticle = createAsyncThunk<any, any>(
  'admin/articles/add',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/admin/articles/add`, payload, {
        headers: {
          'Authorization': `Bearer ${(thunkAPI.getState() as RootState).admin.authToken}`
        }
      })
      return res.data; 
    } catch (error) {
      throw error; 
    }
  }
)

export const adminUpdateArticle = createAsyncThunk<any, any>(
  'admin/articles/update',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch(`${BASE_URL}/admin/articles/update`, payload, {
        headers: {
          'Authorization': `Bearer ${(thunkAPI.getState() as RootState).admin.authToken}`
        } 
      }) 
      return res.data;
    } catch (error) {
      throw error;
    }
  }
)

export const adminDeleteArticle = createAsyncThunk<any, any>(
  'admin/articles/delete',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}/admin/articles/delete`,{ data: payload, 
          headers: {
            'Authorization': `Bearer ${(thunkAPI.getState() as RootState).admin.authToken}`
          }
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
)

export const adminGetArticle = createAsyncThunk<any, any>(
  'admin/articles/detail',
  async (payload, thunkAPI) => {
    try {
      const res = axios.get(`${BASE_URL}/admin/articles/detail`,{
        params: {articleID: payload},
        headers: {
          'Authorization': `Bearer ${(thunkAPI.getState() as RootState).admin.authToken}`
        }
      });
      return res;
    } catch (error) {
      throw error;  
    }
  }
)

export const adminSearchArticle = createAsyncThunk<any, any>(
  'admin/articles/search',
  async (query, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/articles/search`,{
        params: { query: query }, 
        headers: {
          'Authorization': `Bearer ${(thunkAPI.getState() as RootState).admin.authToken}`,
        }
      })
      return res; 
    } catch (error) {
      throw error;  
    }
  }
)

export const {initialize ,setError, setLoading, setSuccess} = adminSlice.actions;
export const adminReducer =  adminSlice.reducer;
