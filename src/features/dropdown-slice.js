import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selected: '0',
}

const dropDownSlice = createSlice({
  initialState,
  name: 'dropdown',
  reducers: {
    selectOption: (state, action) => {
      state.selected = action.payload;
    }
  }
})

export const { selectOption } = dropDownSlice.actions;

export default dropDownSlice.reducer;
