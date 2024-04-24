import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { selectOption } from './dropdown-slice'

const initialState = {
  info: null,
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getUserDataById.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  }
});

export const getUserDataById = createAsyncThunk('users/getUserDataById', async (id, thunkAPI) => {
  thunkAPI.dispatch(selectOption(id));
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const userData = await res.json();
  return userData
});

export default userSlice.reducer;
