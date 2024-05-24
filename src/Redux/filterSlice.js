import { createSlice, createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/setFilter');

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFilter, (state, action) => action.payload);
  },
});

export default filterSlice.reducer;
