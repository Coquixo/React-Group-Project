import { createSlice } from '@reduxjs/toolkit';

export const serieSlice = createSlice({
  name: 'serie',
  initialState: {
    details: {},
    search: []
  },
  reducers: {
    addSerie: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    addSearch: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  }

});

export const { addSerie, addSearch } = serieSlice.actions;

export const serieData = (state) => state.serie;

export default serieSlice.reducer;