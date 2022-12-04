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
    //   userout: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload
    //     }
    //   }
      
    }
    
});

export const { addOrder  } = orderSlice.actions;//Este newOrder que exportamos es el mismo newOrder que contiene los reducers.


//orderData contiene el estado del reducer, es decir, orderData es lo que van a leer
// los componentes conectados a este reducer, para saber sus credenciales

export const orderData = (state) => state.order;
  
export default orderSlice.reducer;
