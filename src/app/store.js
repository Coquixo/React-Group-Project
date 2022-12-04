import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import filmSlice from '../containers/Films/filmsSlice';
import orderSlice from '../containers/User/UserOrder/orderSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        film: filmSlice,
       order:orderSlice

    }

});