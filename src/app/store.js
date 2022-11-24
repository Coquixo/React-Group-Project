import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import filmSlice from '../containers/Films/filmsSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        film: filmSlice
    }
    
});