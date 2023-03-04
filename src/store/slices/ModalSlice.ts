import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IModalState {
  isModal: boolean;
}

const initialState: IModalState = {
  isModal: false,
};

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsModal } = ModalSlice.actions;

export default ModalSlice.reducer;
