import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import filmSlice from '../containers/Films/filmsSlice';
import seriesSlice from '../containers/Series/seriesSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        film: filmSlice,
        serie: seriesSlice

    }

});