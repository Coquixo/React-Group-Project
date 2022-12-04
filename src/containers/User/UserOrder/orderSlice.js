import { createSlice } from '@reduxjs/toolkit';//Método que me permite crear el slice

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
      orders: {}
    },
    reducers: {
      addOrder: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
    
      
    }
    
});

export const { addOrder  } = orderSlice.actions;




export const orderData = (state) => state.order;
  
export default orderSlice.reducer;
