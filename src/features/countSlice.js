import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	value: 1
};

const counterSlice = createSlice({
	initialState,
	name: 'count',
	reducers: {
		increase: state => {
			state.value++;
		}
	},
	extraReducers: builder => {
		builder.addCase(increaseAsync.fulfilled, (state) => {
			state.value++;
		});
	},
});

export const { increase } = counterSlice.actions;

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export const increaseAsync = createAsyncThunk('count/increaseAsync', async () => {
	await delay();
	return 'increaseAsync complete'
});

export default counterSlice.reducer;
