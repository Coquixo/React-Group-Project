import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
// import filmSlice from '../Containers/Films/filmSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        // film: filmSlice
    }
    
});