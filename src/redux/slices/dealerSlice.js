import { createSlice } from '@reduxjs/toolkit';
import { DEALERS_DATA } from '../../data/dealers';

const dealerSlice = createSlice({
  name: 'dealers',
  initialState: {
    list: DEALERS_DATA,
    selectedState: 'all',
  },
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setSelectedState } = dealerSlice.actions;
export default dealerSlice.reducer;
