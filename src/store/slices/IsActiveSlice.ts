import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IIsActiveState {
  isHomeIconActive: boolean;
  isScheduleIconActive: boolean;
}

const initialState: IIsActiveState = {
  isHomeIconActive: true,
  isScheduleIconActive: false,
};

export const IsActiveSlice = createSlice({
  name: 'activeStatus',
  initialState,
  reducers: {
    setIsHomeIconActive: (state, action: PayloadAction<boolean>) => {
      state.isHomeIconActive = action.payload;
    },
    setIsScheduleIconActive: (state, action: PayloadAction<boolean>) => {
      state.isScheduleIconActive = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsHomeIconActive, setIsScheduleIconActive } =
  IsActiveSlice.actions;

export default IsActiveSlice.reducer;
