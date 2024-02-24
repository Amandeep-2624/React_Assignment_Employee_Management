import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeSlice';

export default configureStore({
  reducer: {
    store: employeeReducer,
  },
});
