import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const initialState = {
  array: [],
  current: {},
  error: "",
  isRefreshing: false,
};

export const getAll = createAsyncThunk(
  'models/all',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/models/all');
      return res.data.array;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const add = createAsyncThunk(
  'models/add',
  async (credentials, thunkAPI) => {
    try {
      await axios.post("/models/add", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = thunkAPI.dispatch(getAll());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOne = createAsyncThunk(
  'models/current',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.post('/models/get', {"id": _id})
        
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const remove = createAsyncThunk(
  'models/remove', 
  async (id, thunkAPI) => {
  try {
    await axios.delete('/models/remove', {
      data: { id },
      headers: {
        'Content-Type': 'application/json'
      }});
      const res = await thunkAPI.dispatch(getAll());
      return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const update = createAsyncThunk(
    'models/update', 
    async (credentials, thunkAPI) => {
    try {
      await axios.post("/models/add", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const res = thunkAPI.dispatch(getAll());
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const modelSlice = createSlice({
  name: 'models',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(add.fulfilled, (state, action) => {
        state.models = action.payload;
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.current = action.payload.model;
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
      .addCase(getAll.fulfilled, (state, action) => {
        state.array = action.payload;
      });
  },
});

export default modelSlice.reducer;