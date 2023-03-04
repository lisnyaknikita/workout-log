import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IDaysState {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

const initialState: IDaysState = {
  monday: localStorage.getItem('monday group') || '',
  tuesday: localStorage.getItem('tuesday group') || '',
  wednesday: localStorage.getItem('wednesday group') || '',
  thursday: localStorage.getItem('thursday group') || '',
  friday: localStorage.getItem('friday group') || '',
  saturday: localStorage.getItem('saturday group') || '',
  sunday: localStorage.getItem('sunday group') || '',
};

export const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    setMonday: (state, action: PayloadAction<string>) => {
      state.monday = action.payload;
    },
    setTuesday: (state, action: PayloadAction<string>) => {
      state.tuesday = action.payload;
    },
    setWednesday: (state, action: PayloadAction<string>) => {
      state.wednesday = action.payload;
    },
    setThursday: (state, action: PayloadAction<string>) => {
      state.thursday = action.payload;
    },
    setFriday: (state, action: PayloadAction<string>) => {
      state.friday = action.payload;
    },
    setSaturday: (state, action: PayloadAction<string>) => {
      state.saturday = action.payload;
    },
    setSunday: (state, action: PayloadAction<string>) => {
      state.sunday = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMonday,
  setTuesday,
  setWednesday,
  setThursday,
  setFriday,
  setSaturday,
  setSunday,
} = daysSlice.actions;

export default daysSlice.reducer;
