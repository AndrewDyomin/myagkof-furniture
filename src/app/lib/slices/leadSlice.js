import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const initialState = {
  array: [],
  error: "",
  isRefreshing: false,
};

export const getAllLeads = createAsyncThunk(
  'leads/all',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/leads/all');
      return res.data.array;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const add = createAsyncThunk(
  'leads/add',
  async (credentials, thunkAPI) => {
    try {
      await axios.post("/leads/add", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = thunkAPI.dispatch(getAllLeads());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const remove = createAsyncThunk(
  'leads/remove', 
  async (id, thunkAPI) => {
  try {
    await axios.delete('/leads/remove', {
      data: { id },
      headers: {
        'Content-Type': 'application/json'
      }});
      const res = await thunkAPI.dispatch(getAllLeads());
      return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const update = createAsyncThunk(
    'leads/update', 
    async (credentials, thunkAPI) => {
    try {
      await axios.post("/leads/add", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const res = thunkAPI.dispatch(getAllLeads());
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const leadSlice = createSlice({
  name: 'leads',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(add.fulfilled, (state, action) => {
        state.models = action.payload;
      })
      .addCase(remove.fulfilled, (state, action) => {
        // state.array = action.payload;
      })
      .addCase(remove.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.array = action.payload;
      })
      .addCase(getAllLeads.fulfilled, (state, action) => {
        state.array = action.payload;
      });
  },
});

export default leadSlice.reducer;