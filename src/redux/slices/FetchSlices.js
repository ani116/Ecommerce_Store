import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (type, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const hashType = data.some( (item) => item.category === type )
      if(hashType){
        const filteredData = data.filter((item) => item.category === type);
        return filteredData;
      }
      else{
        return data;
      }
   
      
    } catch (error) {
      return rejectWithValue("Error occurred while fetching data");
    }
  }
);

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      
  },
});

export const { reducer: dataReducer } = dataSlice;