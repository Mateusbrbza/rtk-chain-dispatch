import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	value: false
};

const divisibleByFour = createSlice({
	initialState,
	name: 'divisibleByFour',
	reducers: {
		toggle: (state, action) => {
			state.value = action.payload % 4 === 0 ? true : false;
		}
	},
	extraReducers: builder => {
		builder.addCase(toggleAsync.fulfilled, (state, action) => {
			state.value = action.payload % 4 === 0 ? true : false;
		})
	}
});

export const { toggle } = divisibleByFour.actions;

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export const toggleAsync = createAsyncThunk('divisibleByFour/toggleAsync', (_, { getState }) => {
	return getState().count.value;
});

export default divisibleByFour.reducer;