import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type PositionState = {
  position: number;
};

export const initialState: PositionState = {
  position: 0,
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<number>) => ({
      ...state,
      position: action.payload,
    }),
    resetPosition: (state) => ({
      ...state,
      position: 0,
    }),
  },
});

export default positionSlice;
