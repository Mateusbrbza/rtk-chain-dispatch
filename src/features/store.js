import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from './dropdown-slice';
import userReducer from './user-slice';


const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    user: userReducer,
  }
});

export default store;
